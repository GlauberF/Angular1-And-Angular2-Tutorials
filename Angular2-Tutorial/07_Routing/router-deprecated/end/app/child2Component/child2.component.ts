import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'child2-component',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: 'app/child2component/child2.component.html'
})
export class Child2Component { }
