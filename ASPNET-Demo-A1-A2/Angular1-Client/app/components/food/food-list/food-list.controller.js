(function () {
    'use strict';

    angular
        .module('components.food')
        .controller('foodListController', foodListController);

    foodListController.$inject = ['foodService'];

    function foodListController(foodService) {
        var ctrl = this;

        ctrl.deleteFood = function (foodToDelete) {
            ctrl.inProgress = true;
            ctrl.success = false;
            ctrl.error = false;
            foodService.deleteFood(foodToDelete)
                .then(function (response) {
                    console.log('Success');

                    ctrl.success = true;

                    ctrl.onDelete({
                        $event: {
                            food: ctrl.food
                        }
                    });
                },
                function (response) {
                    ctrl.error = true;
                    console.log('Error');
                }).then(function () {
                    ctrl.inProgress = false;
                });
        };

        ctrl.setFoodItemForEdit = function (foodItem) {
            ctrl.onEdit({
                $event: {
                    food: foodItem
                }
            });
        }
    }
})();
