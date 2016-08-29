(function() {
    "use strict";

    angular
        .module("AngularJsDemoApp")
        .factory("foodService", foodService);

    foodService.$inject = ["$http", "$q", "appSettings"];

    /* @ngInject */
    function foodService($http, $q, appSettings) {

        var url = appSettings.serverPath + "api/food/";
        //var url = "api/foodItems.json";

        var _getAllFood = function() {
            return $http.get(url);
        };

        var _getSingleFood = function(id) {
            return $http.get(url + id);
        };

        var _updateFood = function(foodToUpdate) {
            return $http.put(url + foodToUpdate.Id, foodToUpdate);
        };

        var _addFood = function(newFoodToAdd) {

            newFoodToAdd.created = new Date();

            return $http.post(url, newFoodToAdd);
        };

        var _deleteFood = function(foodToDelete) {
            return $http.delete(url + foodToDelete.Id);
        };

        return {
            getAllFood: _getAllFood,
            getSingleFood: _getSingleFood,
            addFood: _addFood,
            updateFood: _updateFood,
            deleteFood: _deleteFood
        };
    }
})();
