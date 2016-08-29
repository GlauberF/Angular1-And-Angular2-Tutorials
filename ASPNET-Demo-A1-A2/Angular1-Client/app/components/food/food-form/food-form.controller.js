(function () {
    "use strict";

    angular
        .module("components.food")
        .controller("foodFormController", foodFormController);

    foodFormController.$inject = ["foodService"];

    function foodFormController(foodService) {
        var ctrl = this;

        ctrl.food = {};

        ctrl.saveFood = function () {
            
            ctrl.error = false;
            ctrl.success = false;

            foodService.addFood(ctrl.food)

                .then(function () {
                    ctrl.success = true;
                    ctrl.onAdd({
                        $event: {
                            food: ctrl.food
                        }
                    });
                    ctrl.food = {};
                },
                function (response) {
                    //Error
                    ctrl.error = true;
                    handleError(response);
                }).then(function () {
                    ctrl.inProgress = false;
                });
        };

        var handleError = function (response) {
            var errors = "";

            if (response.data && response.data.ModelState) {
                for (var key in response.data.ModelState) {
                    if (response.data.ModelState.hasOwnProperty(key)) {
                        errors += response.data.ModelState[key] + '\r\n';
                    }
                }
            }
            console.log(errors);
        };
    }
})();
