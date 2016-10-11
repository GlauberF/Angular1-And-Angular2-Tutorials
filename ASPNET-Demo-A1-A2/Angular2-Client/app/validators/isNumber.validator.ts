import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[isNumber][formControlName],[isNumber][formControl],[isNumber][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => IsNumberValidator), multi: true }
    ]
})

export class IsNumberValidator implements Validator {
    constructor( @Attribute('isNumber') public isNumber: string) { }

    validate(c: AbstractControl): { [key: string]: any } {

        if (isNaN(+c.value)) {
            // console.log(c.value + " is not a number");
            return {
                isNumber: false
            }
        }

        // console.log(c.value + " is a number");
        return null;
    }
}