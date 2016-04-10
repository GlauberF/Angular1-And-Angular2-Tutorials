System.register(['angular2/core', 'angular2/common', '../../shared/food.dataservice', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, food_dataservice_1, router_1;
    var FoodListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (food_dataservice_1_1) {
                food_dataservice_1 = food_dataservice_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FoodListComponent = (function () {
                function FoodListComponent(_foodDataService) {
                    var _this = this;
                    this._foodDataService = _foodDataService;
                    this.currentlySelectedFood = new core_1.EventEmitter();
                    this.setFoodItemForEdit = function (foodItem) {
                        _this.currentlySelectedFood.next(foodItem);
                    };
                    this.deleteFood = function (foodItem) {
                        _this._foodDataService
                            .DeleteFood(foodItem.Id)
                            .subscribe(function () { return console.log('Food deleted'); }, function (error) { return console.log(error); });
                    };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], FoodListComponent.prototype, "foods", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FoodListComponent.prototype, "currentlySelectedFood", void 0);
                FoodListComponent = __decorate([
                    core_1.Component({
                        selector: 'foodList-component',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        templateUrl: 'app/components/foodList/foodList.component.html'
                    }), 
                    __metadata('design:paramtypes', [food_dataservice_1.FoodDataService])
                ], FoodListComponent);
                return FoodListComponent;
            }());
            exports_1("FoodListComponent", FoodListComponent);
        }
    }
});
//# sourceMappingURL=foodList.component.js.map