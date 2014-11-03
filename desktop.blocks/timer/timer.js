modules.define('timer', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('timer', {
    onSetMod: {
        js: {
            inited : function(){
                var curDate,
                    date = this.params.time,
                    dateDiff,
                    days = this.findElem('days'),
                    hours = this.findElem('hours'),
                    minutes = this.findElem('minutes'),
                    timerChange = function(){
                        curDate = new Date();
                        dateDiff = new Date(date - curDate.getTime())
                        days.html(dateDiff.getDate()< 10 ? '0' + dateDiff.getDate(): dateDiff.getDate());
                        hours.html(dateDiff.getHours()< 10 ? '0' + dateDiff.getHours(): dateDiff.getHours());
                        minutes.html(dateDiff.getMinutes() < 10 ? '0' + dateDiff.getMinutes(): dateDiff.getMinutes());
                    };

                timerChange();

                setInterval(function() {
                    timerChange();
                }, 60 * 1000);
            }
        }
    }
}));

});
