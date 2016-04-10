import { Component, OnInit, Output, EventEmitter, Input } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { FoodDataService } from '../../shared/food.dataservice';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { FoodItem } from '../../models/foodItem';

@Component({
    selector: 'foodList-component',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'app/components/foodList/foodList.component.html'
})

export class FoodListComponent {
    public foodItem: FoodItem;

    @Input() foods: FoodItem[];
    @Output() currentlySelectedFood = new EventEmitter<FoodItem>();

    constructor(private _foodDataService: FoodDataService) { }

    public setFoodItemForEdit = (foodItem: FoodItem): void => {
        this.currentlySelectedFood.next(foodItem);
    }

    public deleteFood = (foodItem: FoodItem): void => {
        this._foodDataService
            .DeleteFood(foodItem.Id)
            .subscribe(() => console.log('Food deleted'),
            error => console.log(error));
    };
}