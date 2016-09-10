(function () {

    'use strict';

    angular
        .module('AngularJsDemoApp', [
            'components',
            'services',

            'angular-loading-bar',
            'toastr'
        ])
        .constant('appSettings',
        {
            serverPath: 'http://localhost:6410/'
        })
        .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }])
        .config(['toastrConfig', function (toastrConfig) {
            angular.extend(toastrConfig, {
                autoDismiss: false,
                containerId: 'toast-container',
                maxOpened: 0,
                newestOnTop: true,
                positionClass: 'toast-bottom-right',
                preventDuplicates: false,
                preventOpenDuplicates: false,
                target: 'body'
            });
        }])

        .factory('sessionInjector', ["$window", "$q", function ($window, $q) {
            var service = this;

            service.responseError = function (response) {
                console.log("-----> " + response.status);
                var url = "https://adfs.unisg.ch/adfs/ls/?wtrealm=https%3a%2f%2fcompass.development.unisg.ch%2f&wctx=WsFedOwinState%3dCfDJ8CSaX9eLkodIhcuqYly6rozOOc_Pj0rwIZaOceZrBQ3Xf6SLXGhoeYQtELnwRG4tDyAIEcUh9wR_Fi9X8xG7i54nDA4WHl0ZG6yHnG4QDFVlLvV4RiFcMMlmsKdbZOP7RAv8JgbK8jDPU5ff6FtofRQIraJwK-W4hul3_q1_rDEt9lAfQpJkkPD_dNZE9TShFw&wa=wsignin1.0&wreply=https%3a%2f%2fcompass.development.unisg.ch%2f";

                $window.location = url;
                return $q.reject(response);
            };

            return service;
        }])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('sessionInjector');
        }]);
} ());
