import {Pipe, PipeTransform} from 'angular2/core';



@Pipe({ name: 'toLowerCase' })
export class LowerCasePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;
        if (typeof value !== 'string') {
            return null;
        }
        return value.toLowerCase();
    }
}