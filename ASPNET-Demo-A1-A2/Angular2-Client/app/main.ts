import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ComponentRef, provide, enableProdMode, bind } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common/index';
import { HTTP_PROVIDERS } from '@angular/http';
import { Configuration } from './shared/app.configuration';
import { FoodDataService } from './shared/food.dataservice';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    Configuration,
    FoodDataService,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' })
]);
