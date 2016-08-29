(function () {

    "use strict";

    angular
        .module('AngularJsDemoApp', [
            'components'
        ])
        .constant("appSettings",
        {
            //serverPath: "http://localhost:5655/"
            serverPath:"http://foodapi4demo.azurewebsites.net/"
        });;

} ());
