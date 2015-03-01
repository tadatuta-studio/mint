/** @class page */
modules.define('page', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, /** @lends page.prototype */{
        onSetMod : {
            js : {
                inited : function() {
                    var callUs = this.findBlockInside('call-us'),
                        form = this.findBlockInside({ block : 'form', modName : 'type', modVal : 'sendmail' });

                    callUs.bindTo(callUs.elem('button'), 'click', (function() {
                        var handler = function() {
                            // хак для установки фокуса
                            setTimeout(function() {
                                form.focus('empty');
                            });
                        };

                        if(window.location.hash === callUs.elem('button').attr('href')) handler();

                        return handler;
                    }()));
                }
            }
        }
    }, /** @lends page */{}));
});
