import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs'; 
import { Data } from 'src/app/customTSFIle/contactFormValue';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  //===========================
  // HTTP HEADERS CONFIGURATION
  //===========================
  postHandlerURL = "/contactFormHandler";
  httpOptions = {
    headers: new HttpHeaders ({
      'content-type': 'application/json',
      'Auth': 'my-auth-token'
    })
  }

  sendForm(data: Data): Observable<Data>{
    return this._http.post<Data>(this.postHandlerURL, data, this.httpOptions);
  }
}
