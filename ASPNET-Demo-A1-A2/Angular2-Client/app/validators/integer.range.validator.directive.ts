import { Directive, Provider } from '@angular/core';
import { IntegerValidator } from './integer.validator';

@Directive({
    selector: 'input[isInRange]',
})

export class IsInRangeValidatorDirective {
}