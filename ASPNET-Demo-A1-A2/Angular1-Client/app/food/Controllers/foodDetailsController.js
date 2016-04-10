(function() {
    "use strict";
    angular
        .module("food.foodModule")
        .controller("food.controllers.foodDetailsController", foodDetailsController);

    foodDetailsController.$inject = ["home.services.foodService", "$routeParams"];

    /* @ngInject */
    function foodDetailsController(foodService, $routeParams) {
        var vm = this;
        vm.foodItem = {};

        var getSingleFood = function(foodId) {

            foodService.getSingleFood(foodId).then(
                function(response) {
                    vm.foodItem = response.data;
                },
                function(response) {
                    //Error
                    console.log(response);
                }).then(function() {
                    //Finally
                });
        };

        getSingleFood($routeParams.foodId);
    }
})();
