import { Injectable } from 'angular2/core';

@Injectable()
export class MyFirstService {
    public getValue = (): string => {
        return "this value is from a service";
    }
}