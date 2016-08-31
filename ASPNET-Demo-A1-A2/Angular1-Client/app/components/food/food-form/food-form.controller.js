(function () {
    'use strict';

    angular
        .module('components.food')
        .controller('foodFormController', foodFormController);

    foodFormController.$inject = ['foodService', 'toastr'];

    function foodFormController(foodService, toastr) {
        var ctrl = this;

        ctrl.saveFood = function () {
            addOrUpdateFood(ctrl.food);
        };

        var addOrUpdateFood = function (newFood) {

            ctrl.inProgress = true;
            ctrl.success = false;
            ctrl.error = false;

            if (newFood.Id) {
                console.log('foodUpdated');
                foodService.updateFood(newFood)
                    .then(function () {

                        ctrl.onUpdate({
                            $event: {
                                food: newFood
                            }
                        });
                        newFood = {};
                        ctrl.success = true;
                        toastr.success('Food Updated');
                    },
                    function (response) {
                        ctrl.error = true;
                        toastr.error('Food Not Updated');
                        handleError(response);
                    }).then(function () {
                        ctrl.inProgress = false;
                    });
            } else {
                foodService.addFood(newFood)
                    .then(function () {
                        ctrl.onAdd({
                            $event: {
                                food: newFood
                            }
                        });
                        newFood = {};
                        ctrl.success = true;
                        toastr.success('Food Added');
                    },
                    function (response) {
                        toastr.error('Food Not Added');
                        ctrl.error = true;
                        handleError(response);
                    }).then(function () {
                        ctrl.inProgress = false;
                    });
            }
        };

        var handleError = function (response) {
            var errors = '';

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
