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
        };

        ctrl.foodUpdated = function (event) {
            ctrl.foods = [];
            getFood();
        };

        ctrl.foodDeleted = function (foodToDelete) {
            ctrl.foods = [];
            getFood();
        };

        ctrl.setFoodItemForEdit = function (event) {
            ctrl.foodToEdit = event.food;
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
