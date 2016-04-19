(function () {

    "use strict";

    function homeService($http) {
        var _getData = function () {

        }

        return {
            getData: _getData
        }
    }

    angular
        .module("AngularJsDemoApp")
        .factory("homeService", homeService);

} ());