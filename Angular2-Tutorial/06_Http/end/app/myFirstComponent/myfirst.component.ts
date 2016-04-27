import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../services/dataService';

@Component({
    selector: 'my-first-component',
    directives: [CORE_DIRECTIVES],
    providers: [DataService],
    templateUrl: 'app/myFirstComponent/myFirst.component.html'
})

export class MyFirstComponent implements OnInit {

    public received: string = "";

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {

        this._dataService
            .GetSingle('Die+Hard')
            .subscribe((item: any) => {
                this.received = item;
            }, error => console.log(error));
    }

}
