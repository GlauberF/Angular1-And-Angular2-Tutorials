(function() {

    "use strict";

    var foodModule = angular
        .module("food.foodModule", ["ngRoute"]);

    foodModule.config(foodconfig);

    foodModule.$inject = ["$routeProvider"];

    /* @ngInject */
    function foodconfig($routeProvider) {
        $routeProvider
            .when("/food", {
                controller: "food.controllers.foodController",
                controllerAs: "vm",
                templateUrl: "app/food/Templates/food.html"
            })
            .when("/food/:foodId", {
                controller: "food.controllers.foodDetailsController",
                controllerAs: "vm",
                templateUrl: "app/food/Templates/foodDetails.html"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
})();
