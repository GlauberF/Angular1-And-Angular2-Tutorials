!function(){"use strict";angular.module("AngularJsDemoApp",["components","services","angular-loading-bar","toastr"]).constant("appSettings",{serverPath:"http://foodapi4demo.azurewebsites.net/"}).config(["cfpLoadingBarProvider",function(o){o.includeSpinner=!1}]).config(["toastrConfig",function(o){angular.extend(o,{autoDismiss:!1,containerId:"toast-container",maxOpened:0,newestOnTop:!0,positionClass:"toast-bottom-right",preventDuplicates:!1,preventOpenDuplicates:!1,target:"body"})}])}(),function(){"use strict";angular.module("components",["components.home","components.food","components.shared"])}(),function(){"use strict";angular.module("services",[])}(),function(){"use strict";angular.module("components.food",["ui.router"])}(),function(){"use strict";angular.module("components.home",["ui.router"])}(),function(){"use strict";angular.module("components.shared",[])}(),function(){"use strict";var o={templateUrl:"app/root.html"};angular.module("AngularJsDemoApp").component("root",o)}(),function(){"use strict";var o={bindings:{food:"<"},templateUrl:"app/components/food/food/food.template.html"};angular.module("components.food").component("food",o)}(),function(){"use strict";var o={bindings:{food:"<"},templateUrl:"app/components/food/food-detail/food-detail.template.html",controller:"foodDetailController"};angular.module("components.food").component("foodDetail",o).config(["$stateProvider","$urlRouterProvider",function(o,t){t.otherwise("/"),o.state("food",{url:"/foods/:id",component:"foodDetail"})}])}(),function(){"use strict";var o={bindings:{onAdd:"&",onUpdate:"&",food:"<"},templateUrl:"app/components/food/food-form/food-form.template.html",controller:"foodFormController"};angular.module("components.food").component("foodform",o)}(),function(){"use strict";var o={bindings:{foods:"<",onDelete:"&",onEdit:"&"},templateUrl:"app/components/food/food-list/food-list.template.html",controller:"foodListController"};angular.module("components.food").component("foodlist",o)}(),function(){"use strict";var o={templateUrl:"app/components/food/foods/foods.template.html",controller:"foodsController"};angular.module("components.food").component("foods",o).config(["$stateProvider","$urlRouterProvider",function(o,t){t.otherwise("/"),o.state("foods",{url:"/foods",component:"foods"})}])}(),function(){"use strict";var o={templateUrl:"app/components/home/home/home.template.html",controller:"homeController"};angular.module("components.home").component("homeComponent",o).config(["$stateProvider","$urlRouterProvider",function(o,t){t.otherwise("/"),o.state("home",{url:"/",component:"homeComponent"})}])}(),function(){"use strict";var o={templateUrl:"app/components/shared/navigation/navigation.template.html"};angular.module("components.shared").component("navigation",o)}(),function(){"use strict";var o={templateUrl:"app/components/shared/shell/shell.template.html"};angular.module("components.shared").component("shell",o)}(),function(){"use strict";function o(o,t){var e=this;t.getSingleFood(o.id).then(function(o){e.food=o.data,console.log(e.food)})}angular.module("components.food").controller("foodDetailController",o),o.$inject=["$stateParams","foodService"]}(),function(){"use strict";function o(o,t){var e=this;e.saveFood=function(){n(e.food)};var n=function(n){n.Id?(console.log("foodUpdated"),o.updateFood(n).then(function(){e.onUpdate({$event:{food:n}}),n={},t.success("Food Updated")},function(o){t.error("Food Not Updated"),r(o)}).then(function(){})):o.addFood(n).then(function(){e.onAdd({$event:{food:n}}),n={},t.success("Food Added")},function(o){t.error("Food Not Added"),r(o)})},r=function(o){var t="";if(o.data&&o.data.ModelState)for(var e in o.data.ModelState)o.data.ModelState.hasOwnProperty(e)&&(t+=o.data.ModelState[e]+"\r\n");console.log(t)}}angular.module("components.food").controller("foodFormController",o),o.$inject=["foodService","toastr"]}(),function(){"use strict";function o(o,t){var e=this;e.deleteFood=function(n){e.inProgress=!0,e.success=!1,e.error=!1,o.deleteFood(n).then(function(o){e.success=!0,t.success("Food Deleted"),e.onDelete({$event:{food:e.food}})},function(o){e.error=!0,t.error("Food Not Deleted")}).then(function(){e.inProgress=!1})},e.setFoodItemForEdit=function(o){e.onEdit({$event:{food:o}})}}angular.module("components.food").controller("foodListController",o),o.$inject=["foodService","toastr"]}(),function(){"use strict";function o(o,t){var e=this;e.foodAdded=function(o){n()},e.foodUpdated=function(o){e.foods=[],n()},e.foodDeleted=function(o){e.foods=[],n()},e.setFoodItemForEdit=function(o){e.foodToEdit=o.food};var n=function(){e.inProgress=!0,o.getAllFood().then(function(o){e.foods=o.data},function(o){console.log(o)}).finally(function(){e.inProgress=!1})};n()}angular.module("components.food").controller("foodsController",o),o.$inject=["foodService","toastr"]}(),function(){"use strict";function o(o){var t=this,e=function(){o.getAllFood().then(function(o){var e=o.data,n=Math.floor(Math.random()*e.length);t.selectedFood=e[n],t.lastUpdatedDate=new Date},function(o){console.log(o)}).then(function(){})};t.getFood=e,e()}angular.module("components.home").controller("homeController",o),o.$inject=["foodService"]}(),function(){"use strict";function o(o,t){var e=t.serverPath+"api/food/",n=function(){return o.get(e)},r=function(t){return o.get(e+t)},d=function(t){return o.put(e+t.Id,t)},a=function(t){return t.created=new Date,o.post(e,t)},l=function(t){return o.delete(e+t.Id)};return{getAllFood:n,getSingleFood:r,addFood:a,updateFood:d,deleteFood:l}}angular.module("services").factory("foodService",o),o.$inject=["$http","appSettings"]}();