(function () {
    'use strict';

    angular
        .module('components.food')
        .controller('foodsController', foodsController);

    foodsController.$inject = ['foodService', 'toastr'];

    function foodsController(foodService, toastr) {
        var ctrl = this;

        ctrl.foodAdded = function (event) {
            getFood();
            toastr.success('Food Added');
        };

        ctrl.foodUpdated = function (event) {
            getFood();
            toastr.success('Food Updated');
        };

        ctrl.foodDeleted = function (foodToDelete) {
            getFood();
            toastr.success('Food Deleted');
        };

        ctrl.setFoodItemForEdit = function (event) {
            ctrl.foodToEdit = event.food;
        };

        var getFood = function () {
            ctrl.foods = [];
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
