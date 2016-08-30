(function () {
    "use strict";

    angular
        .module("components.food")
        .controller("foodDetailController", foodDetailController);

    foodDetailController.$inject = ["$stateParams", "foodService"];

    function foodDetailController($stateParams, foodService) {
        var ctrl = this;
        // foodService.getSingleFood($stateParams.id)
        //     .then(function (food) {
        //         ctrl.food = food;
        //     });


        foodService.getAllFood()
            .then(function (result) {
                for (var index = 0; index < result.data.length; index++) {
                    var element = result.data[index];
                    if (element.Id == $stateParams.id) {
                        ctrl.food = element;
                        break;
                    }
                }
            });
    }
})();
