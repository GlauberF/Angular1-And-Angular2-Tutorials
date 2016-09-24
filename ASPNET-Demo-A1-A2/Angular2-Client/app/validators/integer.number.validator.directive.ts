import { Directive, Provider } from '@angular/core';
import { IntegerValidator } from './integer.validator';

@Directive({
    selector: 'input[isNumber]'
})

export class IsNumberValidatorDirective {
}