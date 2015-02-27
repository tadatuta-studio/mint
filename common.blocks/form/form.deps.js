([
    {
        tech : 'js',
        shouldDeps : [
            { block : 'popup', tech : 'bemhtml' }
        ]
    },
    {
        shouldDeps : [
            'vow',
            {
                elems : [
                    'inner', 'paranja',
                    { elem : 'control', mods : { 'not-valid' : true } },
                    { elem : 'popup', mods : { type : 'error' } }
                ]
            },
            { block : 'popup', mods : { target : 'anchor' } }
        ]
    }
])
