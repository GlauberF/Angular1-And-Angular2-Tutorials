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
var integer_validator_1 = require('./integer.validator');
var common_1 = require('@angular/common');
var IsInRangeValidatorDirective = (function () {
    function IsInRangeValidatorDirective() {
    }
    IsInRangeValidatorDirective = __decorate([
        core_1.Directive({
            selector: 'input[isInRange]',
            providers: [new core_1.Provider(common_1.NG_VALIDATORS, { useValue: integer_validator_1.IntegerValidator.range, multi: true })]
        }), 
        __metadata('design:paramtypes', [])
    ], IsInRangeValidatorDirective);
    return IsInRangeValidatorDirective;
}());
exports.IsInRangeValidatorDirective = IsInRangeValidatorDirective;
//# sourceMappingURL=integer.range.validator.directive.js.map