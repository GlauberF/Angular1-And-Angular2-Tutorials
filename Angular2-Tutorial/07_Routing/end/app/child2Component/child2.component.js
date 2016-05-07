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
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var Child2Component = (function () {
    function Child2Component() {
    }
    Child2Component = __decorate([
        core_1.Component({
            selector: 'child2-component',
            directives: [common_1.CORE_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/child2component/child2.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Child2Component);
    return Child2Component;
}());
exports.Child2Component = Child2Component;
//# sourceMappingURL=child2.component.js.map