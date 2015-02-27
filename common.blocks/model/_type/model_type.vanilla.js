/* jshint maxlen:100500 */
modules.define('model', ['objects', 'util'], function(provide, objects, util, block) {
    block = objects.extend(block, {
        basicTypes : objects.extend(block.basicTypes, {
            email : {
                caption : 'Email',
                hint : 'address@site.com',
                type : 'string',
                validation : [function(value) { return (/^\S+@\S+\.\S+$/).test(value) || 'Ожидается email'; }]
            },
            phone : {
                caption : 'Номер телефона',
                hint : '+380...',
                type : 'string',
                validation : [function(value) { return (/^\+?\d+$/).test(value) || 'Ожидается номер телефона'; }]
            },
            stringEscaped : {
                cast : function(value) { return util.escapeHTML(value); },
                type : 'string'
            }
        })
    });

    block = objects.extend(block, {
        types : objects.extend({}, block.basicTypes, block.projectTypes)
    });

    provide(block);
});
