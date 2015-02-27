/** @class form */
modules.define('form', [
    'i-bem__dom', 'BEMHTML', 'jquery', 'vow'
], function(provide, BEMDOM, BEMHTML, $, vow) {
    provide(BEMDOM.decl(this.name, /** @lends form.prototype */{
        onSetMod : {
            js : {
                inited : function() {
                    this.bindTo(this.elem('inner'), 'submit', function(e) {
                        e.preventDefault();

                        this.submit();
                    });
                }
            },

            // состояние недоступности для редактирования
            disabled : function(modName, modVal) {
                // TODO: дизейблить только сабмит-кнопку?
                this.setMod(this.elem('control', 'type', 'submit'), 'disabled', modVal);
            },

            // состояние ожидания отета от сервера
            pending : function(modName, modVal) {
                this.setMod('disabled', modVal);

                this.findBlocksInside(this.elem('control', 'type', 'submit'), 'spin-icon').forEach(function(spin) {
                    spin.setMod('visible', modVal);
                });
            }
        },

        onElemSetMod : {
            // контрол формы
            control : {
                // состояние недоступности для изменения
                disabled : function(elem, modName, modVal) {
                    var controlBlock = this.findBlockOn(elem, ({
                        input : 'input',
                        textarea : 'input',
                        submit : 'button'
                    })[this.getMod(elem, 'type')]);

                    controlBlock && controlBlock.setMod(modName, modVal);
                }
            }
        },

        _popups : {},

        /**
         * Очищает поле/всю форму
         * @param {String} [name] Имя поля формы
         */
        clear : function(name) {
            if(!name) this.elem('inner')[0].reset();

            var controls = this.getControlsByName(name),
                blockName;

            controls.forEach(function(control) {
                if(control.constructor._name) {
                    blockName = control.constructor._name;

                    if(blockName === 'dnd-attach') return control.clear();
                    if(blockName === 'radio-group') return control.setVal();

                    control.setVal(({
                        'checkbox-group' : [],
                        input : '',
                        '.select_mode_check' : [],
                        '.select_mode_radio-check' : undefined
                    })[typeof blockName === 'object' ?
                        control.buildSelector(blockName.modName, blockName.modVal) : blockName]);
                } else {
                    $(control).val('');
                }
            });

            return this;
        },

        getControlsByName : function(name) {
            var _this = this,
                blocks = [];

            this.domElem.find('[name=' + name + ']').get().map(function(domNode) {
                blocks.push(_this.findBlockOutside($(domNode), ({
                    // TODO: select
                    checkbox : 'checkbox-group',
                    'datetime-local' : 'input',
                    radio : 'radio-group',
                    text : 'input',
                    textarea : 'input'
                })[domNode.type]) || domNode);
            });

            return blocks;
        },

        showErrors : function(errors) {
            this.hideErrors();

            Object.keys(errors).forEach(function(key) {
                var input = this.findBlockInside(this.domElem.find('[name=' + key + ']').closest('.input'), 'input'),
                    formControl = this.findElem(input.domElem, 'control');

                this.showPopup(input._uniqId, formControl, errors[key].errors.join('<br>'));
                this.setMod(formControl, 'not-valid', true);
            }, this);

            return this;
        },

        hideErrors : function() {
            Object.keys(this._popups).forEach(function(key) {
                if(this._popups[key]) {
                    this._popups[key].popup.delMod('visible');
                    this.delMod(this._popups[key].target, 'not-valid');
                }
            }, this);
        },

        showPopup : function(popupId, target, content) {
            if(!this._popups[popupId]) {
                var popup = $(BEMHTML.apply({
                    block : 'popup',
                    directions : ['left-center', 'right-center'],
                    mods : { target : 'anchor', theme : 'islands' },
                    mix : [{ block : 'form', elem : 'popup', elemMods : { type : 'error' } }],
                    content : content
                })).bem('popup');

                this._popups[popupId] = {
                    popup : popup,
                    target : target
                };

                popup.setAnchor(target);
                popup.setMod('visible', true);
            } else {
                this._popups[popupId].popup.setContent(content).setMod('visible', true);
            }

            return this;
        },

        // TODO: подумать над именем метода, может назвать getVal?
        parse : function() {
            var formElements = this.elem('inner')[0].elements,
                parsedData = {};

            // TODO: доделать парсинг, native select
            Array.prototype.forEach.call(formElements, function(control) {
                var value = ['checkbox', 'radio'].indexOf(control.type) > -1 ?
                    (control.checked ? control.value : '') :
                    control.value;

                if(control.name) {
                    if(!parsedData.hasOwnProperty(control.name)) parsedData[control.name] = '';

                    // игнорируем шаг для не чекнутых чекбоксов и переключателей
                    if(!(['checkbox', 'radio'].indexOf(control.type) > -1 && !value)) {
                        parsedData[control.name] = parsedData[control.name] !== '' ?
                            (Array.isArray(parsedData[control.name]) ?
                                parsedData[control.name] :
                                [parsedData[control.name]]).concat(value) :
                            value;
                    }
                }
            });

            // селект не создает инпут когда ничего не выбрано
            this.findBlocksInside('select').forEach(function(select) {
                var name = select.getName(),
                    value = select.getVal();

                if(name && !formElements.namedItem(name)) parsedData[name] = value === undefined ? '' : value;
            });

            // добавить к отправляемым данным файлы
            this.findBlocksInside('dnd-attach').forEach(function(block) {
                parsedData[block.getName()] = block.getVal();
            });

            return parsedData;
        },

        /**
         * Отправка формы с помощью XHR
         * @returns {Promise}
         */
        submit : (function() {
            var defer;

            return function() {
                // если форма все еще отправляется - вернуть промис запроса
                if(this.hasMod('pending')) return defer && defer.promise();

                var _this = this,
                    xhr = new XMLHttpRequest(),
                    parsedData = this.parse(),
                    formData = Object.keys(parsedData).reduce(function(prev, key) {
                        var values = (Array.isArray(parsedData[key]) ? parsedData[key] : [parsedData[key]]);

                        // Добавить в пустой массив пустую строку, чтобы было что отправлять на сервер
                        if(!values.length) values.push('');

                        values.forEach(function(data) { prev.append(key, data); });

                        return prev;
                    }, new FormData());

                defer = vow.defer();

                /*
                // отработает в любом случае
                xhr.onloadend = function() {
                    _this.delMod('pending');
                };
                // TODO: добавить onabort?
                xhr.onload = function() {
                    if(this.status >= 200 && this.status < 300) {
                        defer.resolve.apply(defer, arguments);
                    } else {
                        defer.reject.apply(defer, arguments);
                    }
                };
                xhr.onerror = function() {
                    defer.reject.apply(defer, arguments);
                };
                xhr.upload.addEventListener('progress', function() {
                    defer.notify.apply(defer, arguments);
                }, false);

                this.setMod('pending', true);

                // browser must support XHR Level 2
                xhr.open('POST', this.elem('inner').prop('action'), true);
                // чтобы express понимал req.xhr === true
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                var r = {
                    "key": "fMt7HENrhCcLXeL3nUBG2A",
                    "message": {
                        "text": JSON.stringify(formData, null, 4),
                        "subject": formData.subject,
                        "from_name": "Mint",
                        "to": [
                            {
                                "email": "abc.ua@yandex.ru",
                                "type": "to"
                            }
                        ]
                    }
                };

                xhr.send(r);
                */

                /*
                 function createCORSRequest(method, url) {
                 var xhr = new XMLHttpRequest();
                 if('withCredentials' in xhr) { xhr.open(method, url, true); } else if(typeof XDomainRequest != 'undefined') {
                 xhr = new XDomainRequest();
                 xhr.open(method, url);
                 } else { xhr = null; }
                 return xhr;
                 }
                 var xhr = createCORSRequest('POST', 'http://smtp.mandrillapp.com/api/1.0/messages/send.json');
                 if(!xhr) { throw new Error('CORS not supported');}
                 xhr.send(JSON.stringify({    message : {        to : [
                 { email : 'abc.ua@yandex.ru' }
                 ], from_email : 'abc.ua@yandex.ru', from_name : 'test', subject : 'test subkect', html : 'bla vla'    }, key : 'fMt7HENrhCcLXeL3nUBG2A'}));
                */


                this.setMod('pending', true);
                defer.promise().always(function() {
                    _this.delMod('pending');
                })

                setTimeout(function() { defer.reject(); }, 2500);

                this.emit('submit', defer.promise());

                return defer.promise();
            };
        }())
    }, /** @lends form */{
        live : function() {
            this.liveBindTo({ elem : 'control', modName : 'type', modVal : 'submit' }, 'click', function() {
               this.submit();
            });
        }
    }));
});
