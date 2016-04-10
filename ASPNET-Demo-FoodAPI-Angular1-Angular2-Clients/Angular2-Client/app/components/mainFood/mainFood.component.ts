import { Component, Input, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { FoodFormComponent } from '../foodForm/foodForm.component';
import { FoodListComponent } from '../foodList/foodList.component';
import { FoodDataService } from '../../shared/food.dataservice';
import { FoodItem } from '../../models/foodItem';

@Component({
    selector: 'mainFood-component',
    providers: [FoodDataService],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FoodFormComponent, FoodListComponent],
    templateUrl: 'app/components/mainFood/mainFood.component.html'
})


export class MainFoodComponent implements OnInit {
    public foodSelectedFromList: FoodItem;
    public foods: FoodItem[];

    constructor(private _foodDataService: FoodDataService) {
        this.setCurrentlySelectedFood(new FoodItem());
        this._foodDataService.foodAdded.subscribe(() => this.getFood());
        this._foodDataService.foodDeleted.subscribe(() => this.getFood());
    }

    ngOnInit() {
        this.getFood();
    }

    public setCurrentlySelectedFood(foodItem: FoodItem) {
        this.foodSelectedFromList = foodItem;
    }

    private getFood = (): void => {
        this._foodDataService
            .GetAllFood()
            .subscribe((response: FoodItem[]) => {
                this.foods = response;
            },
            error => console.log(error),
            () => console.log(this.foods));
    }
}