import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { FoodDataService } from '../../shared/food.dataservice';
import { FoodItem } from '../../models/foodItem';

@Component({
    selector: 'home-component',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [FoodDataService],
    templateUrl: 'app/components/home/home.component.html'
})


export class HomeComponent implements OnInit {

    private selectedFood: FoodItem;
    private lastUpdatedDate: Date;

    constructor(private _foodDataService: FoodDataService) {

    }

    public ngOnInit() {
        this.getFood();
    }

    public updateFood = (): void => {
        this.getFood();
    }

    private getFood = (): void => {
        this._foodDataService
            .GetAllFood()
            .subscribe((response: FoodItem[]) => {
                let foodItems: FoodItem[] = response;
                let randomIndex = Math.floor(Math.random() * foodItems.length);
                this.selectedFood = foodItems[randomIndex];
                this.lastUpdatedDate = new Date();
            },
            error => console.log(error),
            () => console.log(this.selectedFood));
    }

}