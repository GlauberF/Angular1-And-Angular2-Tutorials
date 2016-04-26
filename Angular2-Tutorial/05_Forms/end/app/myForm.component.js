System.register(['angular2/core', 'angular2/common', './model', './integer.range.validator.directive', './integer.number.validator.directive'], function(exports_1, context_1) {
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
    var core_1, common_1, model_1, integer_range_validator_directive_1, integer_number_validator_directive_1;
    var FoodFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (integer_range_validator_directive_1_1) {
                integer_range_validator_directive_1 = integer_range_validator_directive_1_1;
            },
            function (integer_number_validator_directive_1_1) {
                integer_number_validator_directive_1 = integer_number_validator_directive_1_1;
            }],
        execute: function() {
            FoodFormComponent = (function () {
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
            exports_1("FoodFormComponent", FoodFormComponent);
        }
    }
});
//# sourceMappingURL=myForm.component.js.map