(function () {

    "use strict";

    angular
        .module('components.home', [
            'ui.router'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('home', {
                    url: '/',
                    component: 'homeComponent',
                });
        });

})();
