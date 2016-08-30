(function () {
    "use strict";

    angular
        .module("components.food")
        .controller("foodDetailController", foodDetailController);

    foodDetailController.$inject = [];

    function foodDetailController() {
        var ctrl = this;
        console.log(ctrl);
    }
})();
