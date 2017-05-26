fnCountries.$inject = ['$http'];
angular.module('factoryModule', [])
.factory('countriesFactory', fnCountries);

function fnCountries($http) {
    return {
        Get: function () {
            return $http({
                method: 'GET',
                url: 'https://restcountries.eu/rest/v2/all',
                contentType: "application/json"
            });
        }
    }
}