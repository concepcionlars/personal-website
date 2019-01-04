import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthData } from 'src/app/customTSFIle/AuthData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _http: HttpClient ) { }

//===========================
// HTTP HEADERS CONFIGURATION
//===========================
httpOptions = {
  headers: new HttpHeaders ({
    'content-type': 'application/json',
    'Auth': 'my-auth-token'
  })
}

postHandler = "http://localhost:4000/authenticate";

  sendAuth(data: AuthData): Observable<AuthData> {
    return this._http.post<AuthData>(this.postHandler, data, this.httpOptions)
  }
}
