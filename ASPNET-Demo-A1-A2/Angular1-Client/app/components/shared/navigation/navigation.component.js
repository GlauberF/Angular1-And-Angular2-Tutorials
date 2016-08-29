(function () {

    "use strict";

    var navigation = {
        // bindings: {
        //     contact: '<',
        //     onSelect: '&'
        // },
        templateUrl: 'app/components/shared/navigation/navigation.template.html'
    };

    angular
        .module('components.shared')
        .component('navigation', navigation);
})();
