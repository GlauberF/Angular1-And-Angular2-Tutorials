import { Directive, Provider } from 'angular2/core';
import { IntegerValidator } from './integer.validator';
import { NG_VALIDATORS } from 'angular2/common';

@Directive({
    selector: 'input[isNumber]',
    providers: [new Provider(NG_VALIDATORS, { useValue: IntegerValidator.isNumber, multi: true })]
})

export class IsNumberValidatorDirective {
}