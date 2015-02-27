modules.define('model', ['objects'], function(provide, objects, block) {
    block.models['sendmailForm-brief'] = {
        fields : {
            subject : { type : 'stringEscaped' },
            name : { type : 'stringEscaped' },
            email : {
                type : 'email',
                required : true
            }
        },
        required : true,
        type : 'hash'
    };

    provide(block);
});
