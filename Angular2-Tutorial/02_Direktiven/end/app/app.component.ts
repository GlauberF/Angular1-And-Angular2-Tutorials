import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public items: string[] = [
        'Hamburger',
        'Pommes',
        'Schnitzel'
    ];

    public showItem: boolean = true;

    public toggleShowItem() {
        this.showItem = !this.showItem;
    }
}
