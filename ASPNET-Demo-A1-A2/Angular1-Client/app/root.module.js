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
            serverPath: 'http://foodapi4demo.azurewebsites.net/'
        });

} ());
