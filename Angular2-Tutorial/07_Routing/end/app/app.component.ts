import { Component } from 'angular2/core';
import { MyFirstComponent } from './myFirstcomponent/myFirst.component';
import { ParentComponent } from './parentComponent/parent.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location } from 'angular2/router';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, MyFirstComponent]
})


@RouteConfig([
    { path: '/first', name: 'First', component: MyFirstComponent, useAsDefault: true },
    { path: '/parent/...', name: 'Parent', component: ParentComponent }
])

export class AppComponent { }
