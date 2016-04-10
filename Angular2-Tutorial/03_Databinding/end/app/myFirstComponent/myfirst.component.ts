import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'my-first-component',
    directives: [CORE_DIRECTIVES],
    templateUrl: 'app/myFirstComponent/myFirst.component.html'
})
export class MyFirstComponent {

    public twoWayProperty: string;
    public fromComponentToTemplate: string;

    constructor() {
        this.fromComponentToTemplate = "This is one way from Component to Template";
    }

    public buttonClicked = ($event): void => {
        alert("You clicked " + $event);
    };
}
