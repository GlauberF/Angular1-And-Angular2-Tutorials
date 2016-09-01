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
                        toastr.success('Food Updated');
                    },
                    function (response) {
                        toastr.error('Food Not Updated');
                        handleError(response);
                    }).then(function () {
                        // finally
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
                        toastr.success('Food Added');
                    },
                    function (response) {
                        toastr.error('Food Not Added');
                        handleError(response);
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
