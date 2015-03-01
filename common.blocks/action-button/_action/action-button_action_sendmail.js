modules.define('action-button', [
    'jquery', 'i-bem__dom', 'BEMHTML'
], function(provide, $, BEMDOM, BEMHTML, actionButton) {

    provide(actionButton.decl({ modName : 'action', modVal : 'sendmail' }, {
        onSetMod : {
            js : {
                inited : function() {
                    var _this = this;

                    this._popup = $(BEMHTML.apply({
                        block : 'popup',
                        mods : { target : 'anchor', theme : 'islands' },
                        mix : {
                            block : 'form',
                            js : { name : 'brief', model : 'sendmailForm-brief' },
                            mods : { saveable : true, type : 'sendmail' }
                        },
                        directions : ['top-right'],
                        content : [
                            {
                                block : 'form',
                                elem : 'inner',
                                content : [
                                    {
                                        block : 'paranja',
                                        mods : { local : true },
                                        mix : { block : 'form', elem : 'paranja' },
                                        content : {
                                            block : 'spin',
                                            mods : { visible : true, size : 'xl', theme : 'islands' }
                                        }
                                    },
                                    {
                                        tag : 'input',
                                        attrs : {
                                            name : 'subject',
                                            type : 'hidden',
                                            value : 'Mint заказ консультации'
                                        }
                                    },
                                    {
                                        block : 'input',
                                        name : 'name',
                                        mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                                        placeholder : 'Ваше имя',
                                        mix : [
                                            {
                                                block : 'form',
                                                elem : 'control',
                                                elemMods : {
                                                    type : 'input'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        block : 'input',
                                        name : 'email',
                                        mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                                        placeholder : 'Email',
                                        mix : [
                                            {
                                                block : 'form',
                                                elem : 'control',
                                                elemMods : {
                                                    type : 'input'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block : 'form',
                                elem : 'submit-status'
                            },
                            {
                                block : 'button',
                                type : 'submit',
                                mods : {
                                    size : 'm',
                                    theme : 'islands',
                                    type : 'submit'
                                },
                                mix : [{
                                    block : 'form',
                                    elem : 'control',
                                    elemMods : { type : 'submit' }
                                }],
                                text : 'Отправить'
                            }
                        ]
                    })).bem('popup');
                    this._popup.setAnchor(this);
                    BEMDOM.append(this.domElem.parent(), this._popup.domElem);
                    this._form = this.findBlockOn(this._popup.domElem, 'form');

                    this._form.on('submit', function(e, promise) {
                        setTimeout(function() { _this._popup.redraw(); });

                        promise.always(function() {
                            setTimeout(function() { _this._popup.redraw(); });
                        });
                    });
                }
            }
        },

        _onClick : function() {
            var _this = this;

            this._popup.toggleMod('visible', true);

            if(this._popup.hasMod('visible')) {
                // TODO: хак для установки фокуса
                setTimeout(function() { _this._form.focus('empty'); });
            }
        }
    }));

});
