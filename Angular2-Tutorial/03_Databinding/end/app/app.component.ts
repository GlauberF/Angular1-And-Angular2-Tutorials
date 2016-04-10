import { Component } from 'angular2/core';
import { MyFirstComponent } from './myFirstcomponent/myFirst.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MyFirstComponent],
    styleUrls: ['app/css/styles.css']
})
export class AppComponent { }
