(function () {

    "use strict";

    function homeController() {
        var vm = this;

        vm.value = "My First angular application";

        vm.add = function (x, y) {
            return x + y;
        }
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController);

} ());