(function () {
    'use strict';

    angular
        .module('components.food')
        .controller('foodListController', foodListController);

    foodListController.$inject = ['foodService', 'toastr'];

    function foodListController(foodService, toastr) {
        var ctrl = this;

        ctrl.deleteFood = function (foodToDelete) {
            ctrl.inProgress = true;
            ctrl.success = false;
            ctrl.error = false;
            foodService.deleteFood(foodToDelete)
                .then(function (response) {

                    ctrl.success = true;
                    toastr.success('Food Deleted');
                    ctrl.onDelete({
                        $event: {
                            food: ctrl.food
                        }
                    });
                },
                function (response) {
                    ctrl.error = true;
                    toastr.error('Food Not Deleted');
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
