import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { profileSchema } from '../../customTSFIle/profileSchema';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private _http: HttpClient) { }

  getURL = '/timeline/node._src';

  getData() {
    return this._http.get<profileSchema>(this.getURL)
  }
  
}
