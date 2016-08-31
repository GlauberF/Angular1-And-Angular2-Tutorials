(function () {

    'use strict';

    angular
        .module('AngularJsDemoApp', [
            'components',
            'services',
            
            'angular-loading-bar'
        ])
        .constant('appSettings',
        {
            //serverPath: 'http://localhost:5655/'
            serverPath: 'http://foodapi4demo.azurewebsites.net/'
        });

} ());
