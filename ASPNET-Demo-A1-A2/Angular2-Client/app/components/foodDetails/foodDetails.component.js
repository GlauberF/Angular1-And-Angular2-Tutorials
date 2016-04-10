System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../shared/food.dataservice', '../../models/foodItem'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, food_dataservice_1, foodItem_1;
    var FoodDetailsComponent;
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
            }],
        execute: function() {
            FoodDetailsComponent = (function () {
                function FoodDetailsComponent(_routeparams, _foodDataService) {
                    this._routeparams = _routeparams;
                    this._foodDataService = _foodDataService;
                    this.selectedFoodItem = new foodItem_1.FoodItem();
                }
                FoodDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var foodId = this._routeparams.get('foodId');
                    this._foodDataService
                        .GetSingleFood(parseInt(foodId))
                        .subscribe(function (foodItem) {
                        _this.selectedFoodItem = foodItem;
                    }, function (error) { return console.log(error); });
                };
                FoodDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'foodDetails-component',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        providers: [food_dataservice_1.FoodDataService],
                        templateUrl: 'app/components/foodDetails/foodDetails.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, food_dataservice_1.FoodDataService])
                ], FoodDetailsComponent);
                return FoodDetailsComponent;
            }());
            exports_1("FoodDetailsComponent", FoodDetailsComponent);
        }
    }
});
//# sourceMappingURL=foodDetails.component.js.map