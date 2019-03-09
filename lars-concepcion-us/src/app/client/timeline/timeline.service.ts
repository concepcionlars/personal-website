import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private _http: HttpClient) { }

  //get method
  url = '/timeline';

  getData() {
    return this._http.get(this.url);
  }
}
