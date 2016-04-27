System.register(['angular2/core', 'angular2/router', '../foodDetails/foodDetails.component', '../mainFood/mainFood.component'], function(exports_1, context_1) {
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
    var core_1, router_1, foodDetails_component_1, mainFood_component_1;
    var FoodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (foodDetails_component_1_1) {
                foodDetails_component_1 = foodDetails_component_1_1;
            },
            function (mainFood_component_1_1) {
                mainFood_component_1 = mainFood_component_1_1;
            }],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent() {
                }
                FoodComponent = __decorate([
                    core_1.Component({
                        template: "\n        <router-outlet></router-outlet>\n      ",
                        directives: [router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainFood', component: mainFood_component_1.MainFoodComponent, useAsDefault: true },
                        { path: '/:foodId', name: 'FoodDetail', component: foodDetails_component_1.FoodDetailsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_1("FoodComponent", FoodComponent);
        }
    }
});
//# sourceMappingURL=food.component.js.map