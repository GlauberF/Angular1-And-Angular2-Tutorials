(function () {
    "use strict";

    angular
        .module("components.food")
        .controller("foodsController", foodsController);

    foodsController.$inject = ["foodService"];

    function foodsController(foodService) {
        var ctrl = this;

        ctrl.foodAdded = function (event) {
            //ctrl.foods.push(event.food);
            getFood();
        };

        ctrl.foodDeleted = function (foodToDelete) {
            getFood();
        };

        var getFood = function () {
            ctrl.inProgress = true;
            foodService.getAllFood().then(
                function (response) {
                    ctrl.foods = response.data;
                },
                function (response) {
                    //Error
                    console.log(response);
                }).finally(function () {
                    ctrl.inProgress = false;
                });
        };

        getFood();
    }
})();
