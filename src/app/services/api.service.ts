import { Injectable } from '@angular/core';
import { Http,  RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";
@Injectable()
export class ApiService {
  API_Key = '4d0c35e0-c8a3-4339-bda6-e04f988e5fce';
  url = 'https://content.guardianapis.com/search?page=';
  private api = 'https://content.guardianapis.com/search?api-key='+this.API_Key;
  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.api).map((res) =>
      res.json());
  }
  moreData(pageNumber:number){
    return this.http.get(this.url+pageNumber+'&api-key='+this.API_Key).map( (res)=> res.json());
  }

}
