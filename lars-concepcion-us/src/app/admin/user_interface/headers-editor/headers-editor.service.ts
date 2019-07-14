import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

import { profileSchema } from '../../../customTSFIle/profileSchema';
import { HeadersData } from 'src/app/customTSFIle/headersData/headersFormValue';
import { imageFileData } from 'src/app/customTSFIle/headersData/imageFileData';
import { Config } from 'protractor';

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
  //** Headers */
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Auth': 'my-auth-token'
    })
  }

  //* Post Routes *
  postHandlerURL = '/headersFormHandler';
  saveUrl = '/imageSettingHandler';
  postRoutes = ['/headersFormHandler', '/imageSettingHandler']

  sendForm(Data: HeadersData): Observable<HeadersData> {
    return this._http.post<HeadersData>(this.postHandlerURL, Data, this.httpOptions)
  }

  saveImageSetting(setting :imageFileData): Observable<imageFileData>{
    return this._http.post<imageFileData>(this.saveUrl, setting, this.httpOptions);
  }




}
