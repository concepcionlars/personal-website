import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http'

import { EducationInformation } from 'src/app/customTSFIle/headersData/edu-info'

@Injectable({
  providedIn: 'root'
})

export class EducationInputFieldService {

  constructor(private _http: HttpClient) {}

  //==================================================
  //======== SEND A POST REQUEST TO A SERVER =========
  //==================================================

  postHandlerUrl = '/educationFormHandler';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type' : 'application/json',
      'Auth': 'my-auth-token'
    })
  }

  sendInformation(info: EducationInformation): Observable<EducationInformation>{
    return this._http.post<EducationInformation>(this.postHandlerUrl, info, this.httpOptions)
  }

}
