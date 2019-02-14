import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { headersData } from 'src/app/customTSFIle/headersData/headersFormValue';

@Injectable({
  providedIn: 'root'
})
export class HeadersEditorService {

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'applications/json',
      'Auth': 'my-auth-token'
    })
  }

  postHandlerURL = '/headersFormHandler'

  sendForm() {                                      
  }

}
