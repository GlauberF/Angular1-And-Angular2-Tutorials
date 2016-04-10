import { Injectable } from 'angular2/core';

@Injectable()
export class Configuration {
    baseUrl: string = "http://foodapi4demo.azurewebsites.net/api/";
    title: string = "Angular 2 FoodChooser";
}