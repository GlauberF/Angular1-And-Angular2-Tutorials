"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var index_1 = require('@angular/common/index');
var home_component_1 = require('./components/home/home.component');
var app_configuration_1 = require('./shared/app.configuration');
var food_component_1 = require('./components/food/food.component');
var AppComponent = (function () {
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
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, app_configuration_1.Configuration],
            templateUrl: 'app/app.component.html'
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/food/...', name: 'Food', component: food_component_1.FoodComponent }
        ]), 
        __metadata('design:paramtypes', [app_configuration_1.Configuration, index_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map