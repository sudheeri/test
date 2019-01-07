import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class BigdataService {
  headers = new Headers();
  constructor(private _http:Http) { }
  postWrite(param) {
    console.log("Post"+JSON.stringify(param));
    
      return this._http.post('http://localhost:8084/v1/getFile12', param, {
   headers:this.headers
       })
      .map(res => res.json());    ;
  }
}
