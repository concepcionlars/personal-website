import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';

import { profileSchema } from '../../../customTSFIle/profileSchema';
import { HeadersData } from 'src/app/customTSFIle/headersData/headersFormValue';
import { imageFileData } from 'src/app/customTSFIle/headersData/imageFileData';

@Injectable({
  providedIn: 'root'
})

export class HeadersEditorService {

  constructor(private _http: HttpClient) { }
  //==================================================
  //======== SEND A GET REQUEST TO A SERVER ==========
  //==================================================
  getURL = '/timeline/node._src';

  getData() {
    return this._http.get<profileSchema>(this.getURL)
  }

  //==================================================
  //======== SEND A POST REQUEST TO A SERVER =========
  //==================================================

  postHandlerURL = '/headersFormHandler';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Auth': 'my-auth-token'
    })
  }
  
  sendForm(Data: HeadersData): Observable<HeadersData> {
    return this._http.post<HeadersData>(this.postHandlerURL, Data, this.httpOptions)
  }

  saveUrl = '/imageSettingHandler';
  saveImageSetting(setting :imageFileData): Observable<imageFileData>{
    return this._http.post<imageFileData>(this.saveUrl, setting, this.httpOptions)
  }
}
