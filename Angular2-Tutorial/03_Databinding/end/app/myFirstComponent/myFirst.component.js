System.register(['angular2/core', 'angular2/common', '../myFirstPipe/myFirstPipe.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, myFirstPipe_pipe_1;
    var MyFirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (myFirstPipe_pipe_1_1) {
                myFirstPipe_pipe_1 = myFirstPipe_pipe_1_1;
            }],
        execute: function() {
            MyFirstComponent = (function () {
                function MyFirstComponent() {
                    this.buttonClicked = function ($event) {
                        alert("You clicked " + $event);
                    };
                    this.fromComponentToTemplate = "This is one way from Component to Template";
                    this.upperCaseString = "THIS IS UPPERCASE TRANSFORMED BY A PIPE";
                    this.birthday = new Date(1986, 5, 23);
                }
                MyFirstComponent = __decorate([
                    core_1.Component({
                        selector: 'my-first-component',
                        directives: [common_1.CORE_DIRECTIVES],
                        templateUrl: 'app/myFirstComponent/myFirst.component.html',
                        pipes: [myFirstPipe_pipe_1.LowerCasePipe],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyFirstComponent);
                return MyFirstComponent;
            }());
            exports_1("MyFirstComponent", MyFirstComponent);
        }
    }
});
//# sourceMappingURL=myFirst.component.js.map