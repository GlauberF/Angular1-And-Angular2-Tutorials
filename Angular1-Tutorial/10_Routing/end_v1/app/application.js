(function () {

    "use strict";

    var app = angular.module("AngularJsDemoApp", ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/home.template.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                }).
                when('/about', {
                    templateUrl: 'app/about.template.html',
                    controller: 'aboutController',
                    controllerAs: 'vm'
                }).
                when('/details/:id', {
                    templateUrl: 'app/homeDetails.template.html',
                    controller: 'homeDetailsController',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
} ());
