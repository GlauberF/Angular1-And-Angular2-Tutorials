(function () {

    "use strict";

    var homeComponent = {
        // bindings: {
        //     contact: '<',
        //     onSelect: '&'
        // },
        templateUrl: 'app/components/home/home/home.template.html',
        controller: 'homeController'
    };

    angular
        .module('components.home')
        .component('homeComponent', homeComponent);
})();
