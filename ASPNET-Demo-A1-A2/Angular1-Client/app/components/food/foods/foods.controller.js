(function () {
    'use strict';

    angular
        .module('components.food')
        .controller('foodsController', foodsController);

    foodsController.$inject = ['foodService', 'toastr'];

    function foodsController(foodService, toastr) {
        var ctrl = this;

        ctrl.$onInit = function () {
            getFood();
        };

        ctrl.foodAdded = function (event) {
            console.log(event.food);
            foodService.addFood(event.food)
                .then(function (response) {
                    getFood();
                    ctrl.foodToEdit = {};
                }, function (errors) {
                    handleError(errors);
                });
        };

        ctrl.foodUpdated = function (event) {
            ctrl.foods = [];
            foodService.updateFood(event.food)
                .then(function (response) {
                    getFood();
                    ctrl.foodToEdit = {};
                }, function (errors) {
                    handleError(errors);
                });
        };

        ctrl.foodDeleted = function (event) {
            ctrl.foods = [];

            foodService.deleteFood(event.food)
                .then(function (response) {
                    getFood();
                }, function (errors) {
                    handleError(errors);
                });
        };

        ctrl.setFoodItemForEdit = function (event) {
            ctrl.foodToEdit = event.food;
        };

        var getFood = function () {
            ctrl.inProgress = true;
            foodService.getAllFood().then(
                function (response) {
                    console.log(response.data);
                    ctrl.foods = response.data;
                },
                function (response) {
                    //Error
                    console.log(response);
                }).finally(function () {
                    ctrl.inProgress = false;
                });
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
