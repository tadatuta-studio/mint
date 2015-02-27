modules.define('model', ['objects'], function(provide, objects, block) {
    block.models['sendmailForm-consult'] = {
        fields : {
            subject : { type : 'stringEscaped' },
            name : { type : 'stringEscaped' },
            phone : {
                type : 'phone',
                required : true
            }
        },
        required : true,
        type : 'hash'
    };

    provide(block);
});
