(function() {
    "use strict";

    angular
        .module("home.homeModule")
        .controller("home.controllers.homeController", HomeController);

    HomeController.$inject = ["home.services.foodService"];

    function HomeController(foodService) {

        var vm = this;

        vm.selectedFood = {};

        var getFood = function() {

            foodService.getAllFood().then(
                function(result) {
                    var allFood = result.data;
                    var randomIndex = Math.floor(Math.random() * allFood.length);
                    vm.selectedFood = allFood[randomIndex];
                    vm.lastUpdatedDate = new Date();
                },
                function(response) {
                    //Error
                    console.log(response);
                }).then(function() {
                    //finally
                });
        };

        var updateFood = function() {
            getFood();
        }

        vm.updateFood = updateFood;
        getFood();
    }
})();
