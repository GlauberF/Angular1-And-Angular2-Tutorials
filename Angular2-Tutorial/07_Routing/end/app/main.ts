import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import { APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
