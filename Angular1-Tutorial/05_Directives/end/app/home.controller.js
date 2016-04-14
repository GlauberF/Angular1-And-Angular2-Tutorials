(function () {

    "use strict";

    function homeController() {
        var vm = this;
        vm.foodItems = ["Burger", "Pommes", "Nudeln"];

        vm.toggleVisibilityWithNgShow = function () {
            vm.isVisible = !vm.isVisible;
        }

        vm.toggleVisibilityWithNgSwitch = function () {
            if (vm.switch === 1) {
                vm.switch = 2;
            } else {
                vm.switch = 1;
            }
        }

        vm.resetSwitch = function () {
            vm.switch = 0;
        }

        vm.toggleVisibilityWithNgIf = function () {
            vm.ngif = !vm.ngif;
        }
    }

    function secondController() {
        var vm = this;
        vm.text = "This comes from the second controller";
        vm.text2 = "This is for the isolated directives...."
    }

    function myDirective() {
        return {
            restrict: "AEC",
            template: "<h4>Hellooooo!</h4>"
        };
    }

    function myDirective2() {
        return {
            restrict: "AEC",
            template: "<h4>{{vm.text}}</h4>"
        };
    }

    function isolatedScopeDirective() {
        return {
            restrict: "AEC",
            scope: {
                givenText: '=text'
            },
            template: "<h4>Isolated: {{givenText}}</h4>"
        };
    }

    function isolatedScopeDirectiveWithLink() {
        return {
            restrict: "AEC",
            link: function (scope, element, attributes, controller) {
                element.html(scope.vm.text);
                element.css("background-color", "#ffff00");
            }
        };
    }
    
     function isolatedScopeDirectiveWithController() {
        return {
            restrict: "AEC",
            link: function (scope, element, attributes, controller) {
                element.css("background-color", "#ffff00");
            },
            controller: function ($scope) {
                $scope.inside = "This is inside the directive";
            },
            template: "{{inside}}"
        };
    }

    angular
        .module("AngularJsDemoApp")
        .controller("homeController", homeController)
        .controller("secondController", secondController)
        .directive("mySecondDirective", myDirective2)
        .directive("isolatedScopeDirective", isolatedScopeDirective)
        .directive("isolatedScopeDirectiveWithController", isolatedScopeDirectiveWithController)
        .directive("isolatedScopeDirectiveWithLink", isolatedScopeDirectiveWithLink)
        .directive("myDirective", myDirective);

} ());