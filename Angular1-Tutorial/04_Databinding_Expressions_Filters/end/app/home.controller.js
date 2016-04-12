(function() {

    "use strict";

    homeController.$inject = ["$scope"];

    function homeController($scope) {

        $scope.value = "This is my first app";

        $scope.clickMe = function() {
            alert("Clicked");
        }

        $scope.add = function(a, b) {
            return a + b;
        }

        $scope.foodItem = { calories: 500 }

        $scope.foodItems = ["Burger", "Pommes", "Nudeln"];

        $scope.dateForFilter = new Date();
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);

} ());