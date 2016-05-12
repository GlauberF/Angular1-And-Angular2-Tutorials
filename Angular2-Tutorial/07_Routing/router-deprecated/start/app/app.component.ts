import { Component } from '@angular/core';
import { MyFirstComponent } from './myFirstcomponent/myFirst.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MyFirstComponent]
})
export class AppComponent { }
