import { Component}     from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { Child1Component } from '../child1Component/child1.component';
import { Child2Component } from '../child2Component/child2.component';

@Component({
    template: `
        <router-outlet></router-outlet>
      `,
    directives: [RouterOutlet]
})

@RouteConfig([
    { path: '/', name: 'Child1', component: Child1Component, useAsDefault: true },
    { path: '/:id', name: 'Child2', component: Child2Component }
])

export class ParentComponent { }
