(function () {
    'use strict';

    angular
        .module('components.home')
        .controller('homeController', homeController);

    homeController.$inject = ['foodService'];

    function homeController(foodService) {
        var ctrl = this;

        var getFood = function () {
            foodService
                .getAllFood()
                .then(
                function (result) {
                    var allFood = result.data;
                    alert(result.data);
                    var randomIndex = Math.floor(Math.random() * allFood.length);
                    ctrl.selectedFood = allFood[randomIndex];
                    ctrl.lastUpdatedDate = new Date();
                },
                function (response) {
                    //Error
                    console.log(response);
                }).then(function () {
                    //finally
                });
        };

        ctrl.getFood = getFood;
        getFood();
    }
})();
