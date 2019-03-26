var debCalendarDirective = function(){
    function link (scope, element){
        var domCalendar = element[0].querySelectorAll('#calendar')[0];
        var calendar = new FullCalendar.Calendar(domCalendar, {
            plugins: [ 'dayGrid' ]
        });
        calendar.render();
    }
    return {
      restrict: 'E',
      templateUrl: 'src/templates/debCalendar.html',
      link: link
    }
};
app.directive('debCalendar', debCalendarDirective);