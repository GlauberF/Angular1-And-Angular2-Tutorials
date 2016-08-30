(function () {

    "use strict";

    var foodDetail = {
        bindings: {
            food: '<',
        },
        templateUrl: 'app/components/food/food-detail/food-detail.template.html',
        controller: 'foodDetailController'
    };

    angular
        .module('components.food')
        .component('foodDetail', foodDetail)
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('food', {
                    url: '/food/:id',
                    component: 'foodDetail',
                });
        });
})();
