import { Component } from 'angular2/core';
import { FoodFormComponent } from './myForm.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[ FoodFormComponent ]
})

export class AppComponent { }
