const mainController = ($scope, $http) => {
    $scope.saludo = (ev) => console.log('Hiciste click en: ', ev);
    $scope.exampleEvents = [
        {
            id: '1',
            title: 'Evento de prueba',
            start: '2019-04-26'
        }
    ];
    $scope.apiEvents = [];
    $http.get('./src/api/events.json').then(function(res){
        $scope.apiEvents = res.data;
    });
};

const app = angular.module('app', []).controller('mainController', mainController);
mainController.$inject = ['$scope', '$http'];