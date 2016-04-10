System.register(['angular2/platform/browser', './app.component', 'angular2/core', 'angular2/router', 'angular2/http', './shared/app.configuration', './shared/food.dataservice'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, core_1, router_1, http_1, app_configuration_1, food_dataservice_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_configuration_1_1) {
                app_configuration_1 = app_configuration_1_1;
            },
            function (food_dataservice_1_1) {
                food_dataservice_1 = food_dataservice_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                app_configuration_1.Configuration,
                food_dataservice_1.FoodDataService,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map