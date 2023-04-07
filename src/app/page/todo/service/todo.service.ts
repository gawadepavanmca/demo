import { Injectable } from "@angular/core";
import{ HttpClient}  from "@angular/common/http";
@Injectable({
    providedIn:"root"
})
export class TodoService{
    apiUrl ="https://jsonplaceholder.typicode.com/"
    constructor(private httpClient:HttpClient){

    }

    public getTodo(){
        return this.httpClient.get(this.apiUrl+"todos");
    }
}