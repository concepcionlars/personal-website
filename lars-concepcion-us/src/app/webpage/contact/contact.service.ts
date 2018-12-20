import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs'; 
import { Data } from 'src/app/customTSFIle/formValue';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  //===========================
// HTTP HEADERS CONFIGURATION
//===========================
httpOptions = {
  headers: new HttpHeaders ({
    'content-type': 'application/json',
    'Auth': 'my-auth-token'
  })
}

postHandler = "http://localhost:4000/formHandler";

  sendForm(data: Data): Observable<Data>{
    return this._http.post<Data>(this.postHandler, data, this.httpOptions);
  }

}
