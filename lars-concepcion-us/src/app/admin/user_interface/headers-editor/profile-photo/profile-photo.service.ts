import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

import { ProfilePhotoData } from 'src/app/customTSFIle/headersData/profile-photo-data';

@Injectable({
  providedIn: 'root'
})

export class ProfilePhotoService {

  constructor(private _http: HttpClient) { }

  saveUrl = '/imageSettingHandler';
  httpOptions = {
    headers: new HttpHeaders ({
      'content-type': 'application/json',
      'Auth': 'my-auth-token',
    })
  }

  //post request
  saveImageSetting(setting :ProfilePhotoData): Observable<ProfilePhotoData>{
    return this._http.post<ProfilePhotoData>(this.saveUrl, setting, this.httpOptions)
  }
}
