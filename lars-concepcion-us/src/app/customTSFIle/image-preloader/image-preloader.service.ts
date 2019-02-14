import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Property } from 'src/app/customTSFIle/image-preloader/image-property';
import { ImageServerService } from 'src/app/customTSFIle/image-preloader/image-server/image-server.service';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloaderService {

  constructor(private _http: HttpClient) {}

  dataURL = '/imagePreloader';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Auth': 'my-auth-token'
    })
  }

  sendARequest(metadata: Property): Observable<Property>{
    return this._http.post<Property>(this.dataURL, metadata, this.httpOptions)
  }

}

// ante meridiem (a.m) and post meridiem (p.m)