import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProfileImageMetadata } from '../../../customTSFIle/profileImageMetadata';

@Injectable({
  providedIn: 'root'
})
export class ProfileCoverService {

  constructor(private _http: HttpClient) { }

  metadata : ProfileImageMetadata;

  //Get the headers image
  async getData() {
    return new Promise(resolve => {
      const getUrl = '/headers/node._src';
      this._http.get<ProfileImageMetadata>(getUrl).subscribe((data: ProfileImageMetadata) => resolve(this.metadata = data));
    })
  }

  // set the src attribute dynamically
  async updateSrcAttribute(element, renderer, elementor) {
    return new Promise(resolve => {
      const src = "node._src/" + this.metadata[elementor][0].filename + "/" + this.metadata[elementor][0]._id + "/" +this.metadata[elementor][0].chunkSize + "/" + this.metadata[elementor][0].length + "/" + this.metadata[elementor][0].schemaType;
      for(var i = 0; i < element.length; i++) {
        resolve(renderer.setAttribute(element[i], 'src', src))
      }
    })

  }

  // this function must change the image src and attribute async
  async update(el, renderer, elementor) {
    await this.getData();
    await this.updateSrcAttribute(el, renderer, elementor);
    console.log(el)
  }
}
