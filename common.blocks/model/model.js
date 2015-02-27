/** @class model */
modules.define('model', [], function(provide, block) {
    // TODO: временная заглушка для клиентской валидации, сделать клиентскую ручку в апи для проверки уникальности?
    block.validation.uniq = function() { return function() { return true; }; };

    provide(block);
});
