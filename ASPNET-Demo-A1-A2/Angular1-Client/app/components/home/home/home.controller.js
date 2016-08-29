(function () {
    "use strict";

    angular
        .module("components.home")
        .controller("homeController", homeController);

    homeController.$inject = [];

    function homeController() {

        // var vm = this;

        // vm.selectedFood = {};

        // var getFood = function () {

        //     foodService
        //         .getAllFood()
        //         .then(
        //         function (result) {
        //             var allFood = result.data;
        //             var randomIndex = Math.floor(Math.random() * allFood.length);
        //             vm.selectedFood = allFood[randomIndex];
        //             vm.lastUpdatedDate = new Date();
        //         },
        //         function (response) {
        //             //Error
        //             console.log(response);
        //         }).then(function () {
        //             //finally
        //         });
        // };

        // var updateFood = function () {
        //     getFood();
        // };

        // vm.updateFood = updateFood;
        // getFood();
    }
})();
