(function () {
    "use strict";

    angular
        .module("components.food")
        .controller("foodDetailController", foodDetailController);

    foodDetailController.$inject = ["$stateParams", "foodService"];

    function foodDetailController($stateParams, foodService) {
        var ctrl = this;
        foodService.getSingleFood($stateParams.id)
            .then(function (food) {
                ctrl.food = food;
            });
    }
})();
