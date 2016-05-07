"use strict";
var IntegerValidator = (function () {
    function IntegerValidator() {
    }
    IntegerValidator.range = function (c) {
        if (c.value > 2147483647 || c.value < 0) {
            return { 'isInRange': false };
        }
        return null;
    };
    IntegerValidator.isNumber = function (c) {
        if (isNaN(parseFloat(c.value)) || isFinite(c.value)) {
            return { 'isNumber': false };
        }
        return null;
    };
    return IntegerValidator;
}());
exports.IntegerValidator = IntegerValidator;
//# sourceMappingURL=integer.validator.js.map