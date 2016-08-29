(function() {

    "use strict";

    angular.module("AngularJsDemoApp",
        [
            //"ui.router",
            //"ngAnimate",
            //"angular-loading-bar",
            //"toastr",

             "components",
            // "food.foodModule"
        ])
        // .config([
        //     "cfpLoadingBarProvider", function(cfpLoadingBarProvider) {
        //         cfpLoadingBarProvider.includeSpinner = false;
        //     }
        // ])
        .constant("appSettings",
        {
            //serverPath: "http://localhost:5655/"
            serverPath:"http://foodapi4demo.azurewebsites.net/"
        });
}());
