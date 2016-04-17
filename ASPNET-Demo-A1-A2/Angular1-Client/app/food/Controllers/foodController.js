(function () {
    "use strict";
    angular
        .module("food.foodModule")
        .controller("food.controllers.foodController", foodController);

    foodController.$inject = ["home.services.foodService"];

    /* @ngInject */
    function foodController(foodService) {
        var vm = this;
        vm.foodItem = {};

        var sendForm = function () {
            addOrUpdateFood(vm.foodItem);
        }

        var setFoodItemForEdit = function (foodItem) {
            vm.foodItem = foodItem;
        }

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
        }

        var addOrUpdateFood = function (newFood) {

            vm.inProgress = true;
            vm.success = false;
            vm.error = false;

            if (newFood.Id) {
                foodService.updateFood(newFood)
                    .then(function () {
                        vm.foodItem = {};
                        getFood();
                        vm.success = true;
                    },
                    function (response) {
                        vm.error = true;
                        handleError(response);
                    }).then(function () {
                        vm.inProgress = false;
                    });
            } else {
                foodService.addFood(newFood)
                    .then(function () {
                        vm.foodItem = {};
                        getFood();
                        vm.success = true;
                    },
                    function (response) {
                        //Error
                        vm.error = true;
                        handleError(response);
                    }).then(function () {
                        vm.inProgress = false;
                    });
            }
        };

        var deleteFood = function (foodToDelete) {
            vm.inProgress = true;
            vm.success = false;
            vm.error = false;
            foodService.deleteFood(foodToDelete)
                .then(function (response) {
                    console.log("Success");
                    getFood();
                    vm.success = true;
                },
                function (response) {
                    vm.error = true;
                    console.log("Error");
                }).then(function () {
                    vm.inProgress = false;
                });
        };

        var getFood = function () {
            vm.inProgress = true;
            foodService.getAllFood().then(
                function (response) {
                    vm.allFoods = response.data;
                },
                function (response) {
                    //Error
                    console.log(response);
                }).finally(function () {
                    vm.inProgress = false;
                });
        };

        getFood();

        vm.sendForm = sendForm;
        vm.deleteFood = deleteFood;
        vm.setFoodItemForEdit = setFoodItemForEdit;
    }
})();
