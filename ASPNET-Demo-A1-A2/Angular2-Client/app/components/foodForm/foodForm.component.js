System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../shared/food.dataservice', '../../models/foodItem', '../../validators/integer.range.validator.directive', '../../validators/integer.number.validator.directive'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, food_dataservice_1, foodItem_1, integer_range_validator_directive_1, integer_number_validator_directive_1;
    var FoodFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (food_dataservice_1_1) {
                food_dataservice_1 = food_dataservice_1_1;
            },
            function (foodItem_1_1) {
                foodItem_1 = foodItem_1_1;
            },
            function (integer_range_validator_directive_1_1) {
                integer_range_validator_directive_1 = integer_range_validator_directive_1_1;
            },
            function (integer_number_validator_directive_1_1) {
                integer_number_validator_directive_1 = integer_number_validator_directive_1_1;
            }],
        execute: function() {
            FoodFormComponent = (function () {
                function FoodFormComponent(_foodDataService) {
                    var _this = this;
                    this._foodDataService = _foodDataService;
                    this.AddOrUpdateFood = function () {
                        if (_this.foodItem.Id) {
                            _this.UpdateFood(_this.foodItem);
                        }
                        else {
                            _this.AddFood(_this.foodItem);
                        }
                    };
                    this.AddFood = function (foodItem) {
                        _this._foodDataService
                            .AddFood(_this.foodItem)
                            .subscribe(function (response) {
                            console.log("added food");
                            _this.foodItem = new foodItem_1.FoodItem();
                        }, function (error) { return console.log(error); });
                    };
                    this.UpdateFood = function (foodItem) {
                        _this._foodDataService
                            .UpdateFood(_this.foodItem.Id, _this.foodItem)
                            .subscribe(function (response) {
                            console.log("updated food");
                            _this.foodItem = new foodItem_1.FoodItem();
                        }, function (error) { return console.log(error); });
                    };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', foodItem_1.FoodItem)
                ], FoodFormComponent.prototype, "foodItem", void 0);
                FoodFormComponent = __decorate([
                    core_1.Component({
                        selector: 'foodForm-component',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, integer_range_validator_directive_1.IsInRangeValidatorDirective, integer_number_validator_directive_1.IsNumberValidatorDirective],
                        templateUrl: 'app/components/foodForm/foodForm.component.html'
                    }), 
                    __metadata('design:paramtypes', [food_dataservice_1.FoodDataService])
                ], FoodFormComponent);
                return FoodFormComponent;
            }());
            exports_1("FoodFormComponent", FoodFormComponent);
        }
    }
});
//# sourceMappingURL=foodForm.component.js.map