import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyFirstService {
    public getValue = (): string => {
        return "this value is from a service";
    }
}