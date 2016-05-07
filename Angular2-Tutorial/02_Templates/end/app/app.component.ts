import {Component} from '@angular/core';
import { TemplateUrlComponent } from './templateUrlComponent/templateUrl.component';
import { InlineTemplateComponent } from './inlineTemplateComponent/inlineTemplate.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [TemplateUrlComponent,InlineTemplateComponent]
})
export class AppComponent { }
