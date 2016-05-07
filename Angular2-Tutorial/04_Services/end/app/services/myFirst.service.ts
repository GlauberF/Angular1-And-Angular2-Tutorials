import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
    public getValue = (): string => {
        return "this value is from a service";
    }
}