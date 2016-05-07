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
var myFirstPipe_pipe_1 = require('../myFirstPipe/myFirstPipe.pipe');
var MyFirstComponent = (function () {
    function MyFirstComponent() {
        this.buttonClicked = function ($event) {
            alert("You clicked " + $event);
        };
        this.fromComponentToTemplate = "This is one way from Component to Template";
        this.upperCaseString = "THIS IS NORMALLY UPPERCASE BUT TRANSFORMED BY A PIPE";
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
exports.MyFirstComponent = MyFirstComponent;
//# sourceMappingURL=myFirst.component.js.map