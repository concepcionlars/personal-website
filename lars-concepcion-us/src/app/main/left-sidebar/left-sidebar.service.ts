import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ImageFileSchema } from '../../customTSFIle/imageFIleSchema';

@Injectable({
  providedIn: 'root'
})
export class LeftSidebarService {

  constructor(
    private _http: HttpClient
  ) { }

  getUrl = '/timeline/leftSidebar/node._src';

  getImageFile(): Observable<ImageFileSchema>{
    return this._http.get<ImageFileSchema>(this.getUrl)
  }
}
