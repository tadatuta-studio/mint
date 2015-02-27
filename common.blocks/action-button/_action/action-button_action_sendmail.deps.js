([
    {
        tech : 'js',
        shouldDeps : [
            { block : 'i-bem', tech : 'bemhtml' },
            { block : 'popup', mods : { theme : 'islands' }, tech : 'bemhtml' },
            { block : 'form', mods : { type : 'sendmail' }, tech : 'bemhtml' }
        ]
    },
    {
        shouldDeps : [
            'icon',
            'spin-icon',
            { block : 'button', mods : { theme : 'islands', view : 'action' } },
            { block : 'popup', mods : { theme : 'islands' } },
            { block : 'form', mods : { saveable : true, type : 'sendmail' } }
        ]
    }
])
