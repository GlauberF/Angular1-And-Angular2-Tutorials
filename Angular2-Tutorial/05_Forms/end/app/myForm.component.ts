import { Component, Input, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { FoodItem } from './model';
import { IsInRangeValidatorDirective } from './integer.range.validator.directive';
import { IsNumberValidatorDirective } from './integer.number.validator.directive';

@Component({
    selector: 'foodForm-component',
    directives: [CORE_DIRECTIVES, IsInRangeValidatorDirective, IsNumberValidatorDirective],
    templateUrl: 'app/myForm.component.html'
})

export class FoodFormComponent {

    public foodItem: FoodItem;

    constructor() {
        this.foodItem = new FoodItem();
    }

    private AddFood = (): void => {
        alert("Added " + JSON.stringify(this.foodItem));
    }
    
    get diagnostic() { return JSON.stringify(this.foodItem); }
}