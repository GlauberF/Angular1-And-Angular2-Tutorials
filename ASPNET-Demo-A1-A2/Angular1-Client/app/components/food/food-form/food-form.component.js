(function () {

    "use strict";

    var foodform = {
        bindings: {
            onAdd: '&'
        },
        templateUrl: 'app/components/food/food-form/food-form.template.html',
        controller: 'foodFormController'
    };

    angular
        .module('components.food')
        .component('foodform', foodform);
})();
