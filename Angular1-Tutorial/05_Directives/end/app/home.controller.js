(function () {

    "use strict";

    function homeController() {
        var vm = this;
        vm.foodItems = ["Burger", "Pommes", "Nudeln"];

        vm.toggleVisibilityWithNgShow = function () {
            vm.isVisible = !vm.isVisible;
        }

        vm.toggleVisibilityWithNgSwitch = function () {
            if (vm.switch === 1) {
                vm.switch = 2;
            } else {
                vm.switch = 1;
            }
        }

        vm.resetSwitch = function () {
            vm.switch = 0;
        }

        vm.toggleVisibilityWithNgIf = function () {
            vm.ngif = !vm.ngif;
        }
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);

} ());