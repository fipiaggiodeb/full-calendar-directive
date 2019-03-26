const mainController = ($scope) => {
    const styles = `
        color: white; 
        background: red; 
        font-size: 26px;
        font-weight: bold;
        padding: 1em;
        margin: 1em 0;
    `;
    console.info('%cAguante Angular 1', styles);
};

const app = angular.module('app', []).controller('mainController', mainController);
mainController.$inject = ['$scope'];