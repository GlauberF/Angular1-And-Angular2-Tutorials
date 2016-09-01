(function () {

    "use strict";

    function aboutController() {
        var vm = this;
        vm.value = "Hello from about";
    }

    angular
        .module("AngularJsDemoApp")
        .controller("aboutController", aboutController);

} ());