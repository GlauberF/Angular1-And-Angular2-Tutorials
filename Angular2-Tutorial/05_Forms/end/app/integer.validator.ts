import { Control } from 'angular2/common';

export class IntegerValidator {

    static range(c: Control): any {

        if (c.value > 2147483647 || c.value < 0) {
            return { 'isInRange': false };
        }
        return null;
    }

    static isNumber(c: Control): any {

        if (!isNaN(parseFloat(c.value)) && isFinite(c.value)) {
            return {};
        }

        return { 'isNumber': true };
    }
}