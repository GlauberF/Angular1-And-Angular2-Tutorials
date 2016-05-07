import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { LowerCasePipe } from '../myFirstPipe/myFirstPipe.pipe';

@Component({
    selector: 'my-first-component',
    directives: [CORE_DIRECTIVES],
    templateUrl: 'app/myFirstComponent/myFirst.component.html',
    pipes: [LowerCasePipe],
})
export class MyFirstComponent {

    public twoWayProperty: string;
    public fromComponentToTemplate: string;
    public upperCaseString: string;
    public birthday: Date;

    constructor() {
        this.fromComponentToTemplate = "This is one way from Component to Template";
        this.upperCaseString = "THIS IS NORMALLY UPPERCASE BUT TRANSFORMED BY A PIPE";
        this.birthday = new Date(1986, 5, 23);
    }

    public buttonClicked = ($event): void => {
        alert("You clicked " + $event);
    };
}
