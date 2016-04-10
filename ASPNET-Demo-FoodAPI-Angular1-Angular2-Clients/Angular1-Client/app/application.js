(function() {

    "use strict";

    angular.module("AngularJsDemoApp",
        [
            "ngRoute",
            "ngAnimate",
            "ngResource",
            "ui.bootstrap",
            "angular-loading-bar",
            "toastr",

            "home.homeModule",
            "food.foodModule"
        ]).config([
            "cfpLoadingBarProvider", function(cfpLoadingBarProvider) {
                cfpLoadingBarProvider.includeSpinner = false;
            }
        ])
        .constant("_", window._)
        .constant("appSettings",
        {
            //serverPath: "http://localhost:5655/"
            serverPath:"http://foodapi4demo.azurewebsites.net/"
        });
}());
