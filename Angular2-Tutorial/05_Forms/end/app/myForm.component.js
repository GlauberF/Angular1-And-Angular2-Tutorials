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
var model_1 = require('./model');
var integer_range_validator_directive_1 = require('./integer.range.validator.directive');
var integer_number_validator_directive_1 = require('./integer.number.validator.directive');
var FoodFormComponent = (function () {
    function FoodFormComponent() {
        var _this = this;
        this.AddFood = function () {
            alert("Added " + JSON.stringify(_this.foodItem));
        };
        this.foodItem = new model_1.FoodItem();
    }
    Object.defineProperty(FoodFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.foodItem); },
        enumerable: true,
        configurable: true
    });
    FoodFormComponent = __decorate([
        core_1.Component({
            selector: 'foodForm-component',
            directives: [common_1.CORE_DIRECTIVES, integer_range_validator_directive_1.IsInRangeValidatorDirective, integer_number_validator_directive_1.IsNumberValidatorDirective],
            templateUrl: 'app/myForm.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FoodFormComponent);
    return FoodFormComponent;
}());
exports.FoodFormComponent = FoodFormComponent;
//# sourceMappingURL=myForm.component.js.map