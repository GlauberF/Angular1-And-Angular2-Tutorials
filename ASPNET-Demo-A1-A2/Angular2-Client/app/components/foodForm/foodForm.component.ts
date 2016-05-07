import { Component, Input, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { FoodDataService } from '../../shared/food.dataservice';
import { FoodItem } from '../../models/foodItem';
import { IsInRangeValidatorDirective } from '../../validators/integer.range.validator.directive';
import { IsNumberValidatorDirective } from '../../validators/integer.number.validator.directive';

@Component({
    selector: 'foodForm-component',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, IsInRangeValidatorDirective, IsNumberValidatorDirective],
    templateUrl: 'app/components/foodForm/foodForm.component.html'
})

export class FoodFormComponent {
    @Input() foodItem: FoodItem;

    constructor(private _foodDataService: FoodDataService) {

    }

    public AddOrUpdateFood = (): void => {
        if (this.foodItem.Id) {
            this.UpdateFood(this.foodItem);
        } else {
            this.AddFood(this.foodItem);
        }
    }

    private AddFood = (foodItem: FoodItem): void => {
        this._foodDataService
            .AddFood(this.foodItem)
            .subscribe((response: FoodItem) => {
                console.log("added food");
                this.foodItem = new FoodItem();
            },
            error => console.log(error));
    }

    private UpdateFood = (foodItem: FoodItem): void => {
        this._foodDataService
            .UpdateFood(this.foodItem.Id, this.foodItem)
            .subscribe((response: FoodItem) => {
                console.log("updated food");
                this.foodItem = new FoodItem();
            },
            error => console.log(error));
    }
}