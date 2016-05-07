import { Directive, provide } from '@angular/core';
import { IntegerValidator } from './integer.validator';
import { NG_VALIDATORS } from '@angular/common';

@Directive({
    selector: '[isInRange][ngControl]',
    providers: [provide(NG_VALIDATORS, { useValue: IntegerValidator.range, multi: true })]
})

export class IsInRangeValidatorDirective {
}