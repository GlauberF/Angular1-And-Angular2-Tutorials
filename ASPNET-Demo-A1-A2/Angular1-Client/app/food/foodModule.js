(function () {

    "use strict";

    var foodModule = angular
        .module("food.foodModule", ["ui.router"]);

    foodModule.config(foodconfig);

    foodModule.$inject = ["$stateProvider", "$urlRouterProvider"];

    /* @ngInject */
    function foodconfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('food', {
                url: '/food',
                controller: "food.controllers.foodController",
                controllerAs: "vm",
                templateUrl: "app/food/Templates/food.html"
            })
            .state('foodDetail', {
                url: '/food/:foodId',
                controller: "food.controllers.foodDetailsController",
                controllerAs: "vm",
                templateUrl: "app/food/Templates/foodDetails.html"
            });
    }
})();
