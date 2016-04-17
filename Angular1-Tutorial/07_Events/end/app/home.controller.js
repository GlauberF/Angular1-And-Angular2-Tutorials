(function () {

    "use strict";

    function homeController() {
        var vm = this;

        vm.sayMyName = function () {
            vm.myName = "Fabian";
        };

        vm.items = ["Burger", "Pommes", "Salat"];

        vm.alertTheItem = function (item) {
            alert(item);
        };
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);

} ());