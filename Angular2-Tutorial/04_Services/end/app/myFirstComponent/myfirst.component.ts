import { Component } from 'angular2/core';
import { MyFirstService } from '../services/myfirst.service';

@Component({
    selector: 'my-first-component',
    providers: [MyFirstService],
    templateUrl: 'app/myFirstComponent/myFirst.component.html'
})
export class MyFirstComponent {

    public valueFromService: string;

    constructor(private _firstService: MyFirstService) {
        this.valueFromService = this._firstService.getValue();
    }
}
