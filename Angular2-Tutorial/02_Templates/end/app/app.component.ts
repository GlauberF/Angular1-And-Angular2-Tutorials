import { Component } from 'angular2/core';
import { TemplateUrlComponent } from './templateUrlComponent/templateUrl.component';
import { InlineTemplateComponent } from './inlineTemplateComponent/inlineTemplate.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [TemplateUrlComponent,InlineTemplateComponent],
    styleUrls: ['app/css/styles.css']
})
export class AppComponent { }
