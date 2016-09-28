import { FormControl  } from '@angular/forms';

export class IntegerValidator {

    static range(c: FormControl): any {

        if (c.value > 2147483647 || c.value < 0) {
            return { 'isInRange': true };
        }
        return {};
    }

    static isNumber(c: FormControl): any {

        if (!isNaN(parseFloat(c.value)) && isFinite(c.value)) {
            return {};
        }

        return { 'isNumber': true };
    }
}