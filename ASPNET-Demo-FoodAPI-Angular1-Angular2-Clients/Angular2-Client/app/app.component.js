System.register(['angular2/core', 'angular2/router', './components/home/home.component', './components/mainFood/mainFood.component', './shared/app.configuration', './components/foodDetails/foodDetails.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, mainFood_component_1, app_configuration_1, foodDetails_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (mainFood_component_1_1) {
                mainFood_component_1 = mainFood_component_1_1;
            },
            function (app_configuration_1_1) {
                app_configuration_1 = app_configuration_1_1;
            },
            function (foodDetails_component_1_1) {
                foodDetails_component_1 = foodDetails_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_configuration, _location) {
                    this._configuration = _configuration;
                    this._location = _location;
                    this.title = _configuration.title;
                }
                AppComponent.prototype.isActive = function (path) {
                    return this._location.path() === path;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'foodChooser-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, app_configuration_1.Configuration],
                        templateUrl: 'app/app.component.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: mainFood_component_1.MainFoodComponent },
                        { path: '/food/:foodId', name: 'FoodDetails', component: foodDetails_component_1.FoodDetailsComponent }
                    ]), 
                    __metadata('design:paramtypes', [app_configuration_1.Configuration, router_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map