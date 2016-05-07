import { Component }     from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { FoodFormComponent } from '../foodForm/foodForm.component';
import { FoodListComponent } from '../foodList/foodList.component';
import { FoodDetailsComponent } from '../foodDetails/foodDetails.component';
import { MainFoodComponent } from '../mainFood/mainFood.component';

@Component({
    template: `
        <router-outlet></router-outlet>
      `,
    directives: [RouterOutlet]
})

@RouteConfig([
    { path: '/', name: 'MainFood', component: MainFoodComponent, useAsDefault: true },
    { path: '/:foodId', name: 'FoodDetail', component: FoodDetailsComponent }
])
export class FoodComponent { }