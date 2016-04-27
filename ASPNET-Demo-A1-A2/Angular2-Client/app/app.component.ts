import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location } from 'angular2/router';
import { HomeComponent } from  './components/home/home.component';
import { MainFoodComponent } from  './components/mainFood/mainFood.component';
import { Configuration } from  './shared/app.configuration';
import { FoodDetailsComponent } from './components/foodDetails/foodDetails.component';
import { FoodComponent } from './components/food/food.component';

@Component({
    selector: 'foodChooser-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, Configuration],
    templateUrl: 'app/app.component.html'
})


@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/food/...', name: 'Food', component: FoodComponent },
    //{ path: '/food/:foodId', name: 'FoodDetails', component: FoodDetailsComponent }
])

export class AppComponent {

    public title: string;

    constructor(private _configuration: Configuration, private _location: Location) {
        this.title = _configuration.title;
    }

    isActive(path): boolean {
        return this._location.path() === path;
    }
} 