modules.define('form', ['i-bem__dom', 'model'], function(provide, BEMDOM, model, block) {
    provide(block.decl({ modName : 'type', modVal : 'sendmail' }, {
        onElemSetMod : {
            'submit-status' : {
                state : function(elem, modName, modVal) {
                    elem.html(({
                        success : this.params.model.indexOf('brief') > -1 ?
                            'Спасибо за обращение, мы выслали бриф на указанный вами email.' :
                            'Ваша заявка принята, мы свяжемся с вами в ближайшее время!',
                        error :  'Что-то пошло не так, попробуйте повторить позже.'
                    })[modVal]);
                }
            }
        },

        // доопределение метода для вывода результата XHR
        submit : function() {
            var _this = this,
                serializedData = ['categories'].reduce(function(prev, key) {
                    prev[key] = [_this.params.model];
                    return prev;
                }, this.parse()),
                validationResult = model.validate(model.getNamesList(serializedData),
                    model.getUpdateData(serializedData), undefined, true),
                request;

            if(validationResult !== true) {
                this.showErrors(validationResult);

                return false;
            } else {
                this.hideErrors();
            }

            this.delMod(this.elem('submit-status'), 'state');

            request = this.__base.apply(this, arguments);

            request.then(function() {
                _this.setMod(_this.elem('submit-status'), 'state', 'success');
            }, function() {
                _this.setMod(_this.elem('submit-status'), 'state', 'error');
            });

            return request;
        }
    }));
});
