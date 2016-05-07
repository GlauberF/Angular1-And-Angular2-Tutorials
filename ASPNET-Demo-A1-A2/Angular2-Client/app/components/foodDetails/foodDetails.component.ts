import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';
import { FoodDataService } from '../../shared/food.dataservice';
import { FoodItem } from '../../models/foodItem';

@Component({
    selector: 'foodDetails-component',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [FoodDataService],
    templateUrl: 'app/components/foodDetails/foodDetails.component.html'
})

export class FoodDetailsComponent implements OnInit {

    public selectedFoodItem: FoodItem = new FoodItem();

    constructor(private _routeparams: RouteParams, private _foodDataService: FoodDataService) {

    }

    ngOnInit() {
        let foodId = this._routeparams.get('foodId');
        this._foodDataService
            .GetSingleFood(parseInt(foodId))
            .subscribe((foodItem: FoodItem) => {
                this.selectedFoodItem = foodItem;
            }, error => console.log(error));
    }
}