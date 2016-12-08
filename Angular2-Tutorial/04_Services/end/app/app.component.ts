import { CalculatorService } from './shared/services/calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    public result: number;

    constructor(private calculatorService: CalculatorService) {

    }

    ngOnInit() {
        this.result = this.calculatorService.add(1, 3);
    }
}
