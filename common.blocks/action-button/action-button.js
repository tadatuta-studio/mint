modules.define('action-button', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            disabled : function(modName, modVal) {
                var button = this.findBlocksOn(this.domElem, 'button');

                button.forEach(function(block) {
                    block.setMod(modName, modVal);
                });
            },

            pending : function(modName, modVal) {
                var spins = this.findBlocksInside('spin-icon');

                this.setMod('disabled', modVal);

                spins.forEach(function(spin) { spin.setMod('visible', modVal); });
            }
        }
    }, {
        changeControlAccessibility : function(block, isAccessible) {
            block
                .setMod('disabled', isAccessible ? '' : true)
                .setMod('hidden', isAccessible ? '' : true);
        },

        live : function() {
            this.liveBindTo('click', function(e) {
                e.stopPropagation();
            });

            this.liveInitOnBlockEvent('click', 'button', function() {
                this._onClick && this._onClick();
            });
        }
    }));
});
