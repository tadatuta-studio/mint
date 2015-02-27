modules.define('form', [
    'i-bem__dom', 'querystring'
], function(provide, BEMDOM, qs, block) {
    provide(block.decl({ modName : 'saveable', modVal : true }, {
        onSetMod : {
            js : {
                inited : function() {
                    this.__base.apply(this, arguments);

                    // загрузить из localStorage сохраненные данные, инициалищировать работу с localStorage
                    this.initSavingData();
                }
            }
        },

        /**
         * Инициализирует работу с localStorage
         */
        // TODO: добавить сохранение значений остальных контролов (селектов, переключателей, ...)
        // TODO: отрефакторить, много обращений к localStorage
        // TODO: хочется _pending, пока форма не заинитится и заполнится данными (хотя не совсем логично, подумать)
        initSavingData : function() {
            var _this = this,
                localStorageName = this.params.name,
                localStorageData = localStorage.getItem(localStorageName),
                inputBlocks = _this.findBlocksOn(this.elem('control', 'type', 'input'), 'input').concat(
                    _this.findBlocksOn(this.elem('control', 'type', 'textarea'), 'input')
                );

            // пробуем распарсить сохраненные в localStorage данные
            if(localStorageData) {
                try {
                    localStorageData = qs.parse(localStorageData);
                } catch (e) {}
            }

            // заполнить форму сохраненными данными
            if(localStorageData) {
                inputBlocks.forEach(function(value) {
                    var data = localStorageData[value.getName()];

                    data && value.setVal(data);
                });
            } else {
                localStorageData = {};
            }

            // обновлять данные в localStorage при изменении текста в input'ах
            BEMDOM.blocks.input.on(this.domElem, 'change', function(e) {
                localStorageData[e.target.getName()] = e.target.getVal();

                localStorage.setItem(localStorageName, qs.stringify(localStorageData));
            });
        }
    }));
});
