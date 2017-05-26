fnController.$inject = ['$scope', 'countriesFactory'];
angular.module('controllerModule', ['factoryModule'])
    .controller('myController', fnController);

function fnController($scope, countriesFactory) {
    $scope.countries = {
        list: '',
        Get: ''
    }

    $scope.countries.Get = function () {
        countriesFactory.Get().then(function (response) {
            $scope.countries.list = response.data;
        }, function (err) {

        });
    }
}