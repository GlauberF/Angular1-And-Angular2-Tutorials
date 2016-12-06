import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    Input
} from '@angular/core';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})


export class HomeComponent implements
    OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy {

    @Input() textForOnChanges: string;

    constructor() { }

    // only called for/if there is an @input variable set by parent.
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges');
        console.log(changes);
    }

    ngOnInit() { console.log('OnInit'); }

    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    ngDoCheck() { console.log('DoCheck'); }

    ngAfterContentInit() { console.log('AfterContentInit'); }

    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    ngAfterContentChecked() { console.log('AfterContentChecked'); }

    ngAfterViewInit() { console.log('AfterViewInit'); }

    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    ngAfterViewChecked() { console.log('AfterViewChecked'); }

    ngOnDestroy() { console.log('OnDestroy'); }
}
