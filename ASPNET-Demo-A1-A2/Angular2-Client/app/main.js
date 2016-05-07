"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_1 = require('@angular/core');
var index_1 = require('@angular/common/index');
var http_1 = require('@angular/http');
var app_configuration_1 = require('./shared/app.configuration');
var food_dataservice_1 = require('./shared/food.dataservice');
var router_deprecated_1 = require('@angular/router-deprecated');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    app_configuration_1.Configuration,
    food_dataservice_1.FoodDataService,
    core_1.provide(index_1.LocationStrategy, { useClass: index_1.HashLocationStrategy }),
    core_1.provide(index_1.APP_BASE_HREF, { useValue: '/' })
]);
//# sourceMappingURL=main.js.map