import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import { MyFirstService } from './services/myfirst.service';

bootstrap(AppComponent, [MyFirstService]);
