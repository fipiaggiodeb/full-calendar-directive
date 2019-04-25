var debCalendarDirective = function(){
    function link (scope, element){
        /**
         * Recibe una lista de eventos sin las key 'start' y 'end'
         * y se las agrega copiando los valores de 'startAt' y 'endAt'
         * @param events [array]
         * @returns {object}
         */
        var refactorEvents = function(events){
            /* 
                Primero hay que clonar el array porque si cambia directamente 'events'
                el watcher se dispara muchas veces y eso crashea la aplicación
            */
            var refactored = angular.copy(events);
            refactored.map(function(event){
                event.start = new Date(event.startAt);
                event.end = new Date(event.endAt);
                event.title = 'Turno: ' + event.id;
                return event;
            });
            return refactored;
        };

        // Check default props values
        if(!scope.clickEventCb){
            scope.clickEventCb = function(){ return false; }
        }

        // DOM element
        var domCalendar = element[0].querySelectorAll('#calendar')[0];

        // Calendar config
        var configCalendar = {
            timeZone: "UTC",
            locale: "es",
            plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list'],
            defaultView: 'listWeek',
            views: {
                listDay: { buttonText: 'Día' },
                listWeek: { buttonText: 'Semana' },
                listMonth: { buttonText: 'Mes' },
                dayGridMonth: {
                    buttonText: 'Calendario',
                    eventLimit: 6
                }
            },
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'listDay,listWeek,listMonth'
            },
            events: scope.events,
            eventClick: scope.clickcb
        };

        /**
         * Valores default
         */

        // Si está habilitado el calendario
        if(scope.calendar){
            configCalendar.header.right += ', dayGridMonth'
        }

        // Si está deshabilitado el listado
        if(scope.hidelist){
            configCalendar.defaultView = 'dayGridMonth';
            configCalendar.header.right = 'dayGridMonth,timeGridWeek,timeGridDay';
        }

        // Si es editable
        if(scope.editable){
            configCalendar.editable = true;
            configCalendar.droppable = true;
        }

        // Límite de eventos
        if(scope.limit){
            configCalendar.views.dayGridMonth.eventLimit = parseInt(scope.limit);
        }

        // Vista default
        if(scope.default){
            configCalendar.defaultView = scope.default;
        }
        
        /**
         * Calendar render
         */
        var calendar = new FullCalendar.Calendar(domCalendar, configCalendar);
        calendar.render();

        // Watcher + re-render
        scope.$watch('events', function(){
            var ev = scope.events;
            // Necesito la prop start, si no la tiene hago un refactor y se lo agrego
            if(ev[0] && ev[0].hasOwnProperty('startAt') && !ev[0].hasOwnProperty('start')){
                scope.events = refactorEvents(scope.events);
            }
            // Actualizo la config y hago el re-render
            configCalendar.events = scope.events;
            calendar.destroy();
            calendar = new FullCalendar.Calendar(domCalendar, configCalendar);
            calendar.render();
        });
    }
    return {
        restrict: 'E',
        templateUrl: 'src/templates/debCalendar.html',
        scope: {
            clickcb: '=',
            events: '=',
            calendar: '=?',
            hidelist: '=?',
            editable: '=?',
            limit: '=?',
            default: '=?'
        },
        link: link
    }
};
app.directive('debCalendar', debCalendarDirective);