System.register(['angular2/core', 'angular2/common', '../services/dataService'], function(exports_1, context_1) {
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
    var core_1, common_1, dataService_1;
    var MyFirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            }],
        execute: function() {
            MyFirstComponent = (function () {
                function MyFirstComponent(_dataService) {
                    this._dataService = _dataService;
                    this.received = "";
                }
                MyFirstComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dataService
                        .GetSingle('Die+Hard')
                        .subscribe(function (item) {
                        _this.received = item;
                    }, function (error) { return console.log(error); });
                };
                MyFirstComponent = __decorate([
                    core_1.Component({
                        selector: 'my-first-component',
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [dataService_1.DataService],
                        templateUrl: 'app/myFirstComponent/myFirst.component.html'
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService])
                ], MyFirstComponent);
                return MyFirstComponent;
            }());
            exports_1("MyFirstComponent", MyFirstComponent);
        }
    }
});
//# sourceMappingURL=myFirst.component.js.map