(function () {

    "use strict";

    var foodOverview = {
        // bindings: {
        //     contact: '<',
        //     onSelect: '&'
        // },
        templateUrl: 'app/components/food/food-overview/food-overview.template.html',
        //controller: 'homeController'
    };

    angular
        .module('components.food')
        .component('foodOverview', foodOverview)
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('food-overview', {
                    url: '/foods',
                    component: 'foodOverview',
                });
        });
})();
