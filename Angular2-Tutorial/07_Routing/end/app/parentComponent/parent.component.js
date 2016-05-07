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
var child1_component_1 = require('../child1Component/child1.component');
var child2_component_1 = require('../child2Component/child2.component');
var ParentComponent = (function () {
    function ParentComponent() {
    }
    ParentComponent = __decorate([
        core_1.Component({
            template: "\n        <router-outlet></router-outlet>\n      ",
            directives: [router_deprecated_1.RouterOutlet]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Child1', component: child1_component_1.Child1Component, useAsDefault: true },
            { path: '/:id', name: 'Child2', component: child2_component_1.Child2Component }
        ]), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map