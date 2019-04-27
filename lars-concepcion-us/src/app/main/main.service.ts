import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProfileImageMetadata } from '../customTSFIle/profileImageMetadata';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: HttpClient) { }

  getUrl = '/headers/node._src';

  getHeaderImage() {
    return this._http.get<ProfileImageMetadata>(this.getUrl);
  }
}
