const mainController = ($scope, $http) => {
    const styles = `
        color: white; 
        background: peru; 
        font-size: 26px;
        font-weight: bold;
        padding: 1em;
        margin: 1em 0;
        border-radius: 5px;
    `;
    console.info('%c(╯°□°）╯︵ ┻━┻', styles);
    $scope.saludo = (ev) => console.log('Hiciste click en: ', ev.el.innerText);
    $scope.exampleEvents = [
        {
            id: '1',
            title: 'Evento de prueba',
            start: '2019-04-01'
        }
    ];
    $scope.apiEvents = [];
    $http.get('./src/api/events.json').then(function(res){
        $scope.apiEvents = res.data;
    });
};

const app = angular.module('app', []).controller('mainController', mainController);
mainController.$inject = ['$scope', '$http'];