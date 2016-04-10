import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { ComponentRef, provide, enableProdMode, bind } from 'angular2/core';
import { APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Configuration } from './shared/app.configuration';
import { FoodDataService } from './shared/food.dataservice';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    Configuration,
    FoodDataService,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' })
]);
