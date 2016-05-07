import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'child1-component',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: 'app/child1component/child1.component.html'
})
export class Child1Component { }
