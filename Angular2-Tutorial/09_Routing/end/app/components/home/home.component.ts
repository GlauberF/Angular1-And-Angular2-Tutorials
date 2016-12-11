import { FoodItem } from '../../models/foodItem';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})


export class HomeComponent {
    public currentFood: FoodItem = new FoodItem();

    public AddOrUpdateFoodNoValidation = (): void => {
        let stringObject = JSON.stringify(this.currentFood);
        alert(stringObject);
    }

    public AddOrUpdateFoodWithValidation = (): void => {
        let stringObject = JSON.stringify(this.currentFood);
        alert(stringObject);
    }
}
