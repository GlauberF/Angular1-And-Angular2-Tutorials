System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IntegerValidator;
    return {
        setters:[],
        execute: function() {
            IntegerValidator = (function () {
                function IntegerValidator() {
                }
                IntegerValidator.range = function (c) {
                    if (c.value > 2147483647 || c.value < 0) {
                        return { 'isInRange': true };
                    }
                    return {};
                };
                IntegerValidator.isNumber = function (c) {
                    if (!isNaN(parseFloat(c.value)) && isFinite(c.value)) {
                        return {};
                    }
                    return { 'isNumber': true };
                };
                return IntegerValidator;
            }());
            exports_1("IntegerValidator", IntegerValidator);
        }
    }
});
//# sourceMappingURL=integer.validator.js.map