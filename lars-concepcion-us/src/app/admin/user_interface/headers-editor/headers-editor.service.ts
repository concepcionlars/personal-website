import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HeadersData } from 'src/app/customTSFIle/headersData/headersFormValue';

@Injectable({
  providedIn: 'root'
})

export class HeadersEditorService {

  constructor(private _http: HttpClient) { }

  postHandlerURL = '/headersFormHandler';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Auth': 'my-auth-token'
    })
  }
  //post request
  sendForm(Data: HeadersData): Observable<HeadersData> {
    return this._http.post<HeadersData>(this.postHandlerURL, Data, this.httpOptions)
  }
}
