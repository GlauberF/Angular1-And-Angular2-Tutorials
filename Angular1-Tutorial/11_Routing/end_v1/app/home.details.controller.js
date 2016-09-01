(function () {

    "use strict";

    function homeDetailsController($routeParams) {
        var vm = this;
        vm.value = "You redirected with the ID: " + $routeParams.id;

        // Make my http call with this id
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeDetailsController", homeDetailsController);

} ());