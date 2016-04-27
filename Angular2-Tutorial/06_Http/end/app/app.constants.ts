import { Injectable } from 'angular2/core';

@Injectable()
export class Configuration {
    //public Server: string = "http://localhost:5000/";
    public Server: string = "http://www.omdbapi.com/";
    
    //public ApiUrl: string = "api/";
    public ApiUrl: string = "?";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}