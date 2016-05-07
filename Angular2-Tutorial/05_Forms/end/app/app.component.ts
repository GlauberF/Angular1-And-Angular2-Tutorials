import { Component } from '@angular/core';
import { FoodFormComponent } from './myForm.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[ FoodFormComponent ]
})

export class AppComponent { }
