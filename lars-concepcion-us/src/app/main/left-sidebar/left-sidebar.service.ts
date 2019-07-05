import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { profileSchema } from '../../customTSFIle/profileSchema';

import { ImageFileSchema } from '../../customTSFIle/imageFIleSchema';

@Injectable({
  providedIn: 'root'
})
export class LeftSidebarService {

  constructor(
    private _http: HttpClient
  ) { }

  getUrl = '/timeline/leftSidebar/node._src';
  getSrc = '/timeline/node._src';

  getImageFile(): Observable<ImageFileSchema>{
    return this._http.get<ImageFileSchema>(this.getUrl)
  }


  ///===================================================================
  //THIS IS FUNCTION IS TO DYNAMICALLY UPDATE INTRODUCTION ON USER SAVE
  //====================================================================
  introduction : String;

  async changeIntroduction(parent, oldChild, renderer) {
    //first create a function to fetch data from server;
    await this.getData();
    //second hide the old child element;
    await this.hideOldChild(oldChild, renderer);
    //third create a paragraph element;
    var p = await this.createParagraphElement(renderer);
    //fourth set class attribute
    await this.setClassAttribute(p, renderer);
    //fifth set id attribute
    await this.setIDAttribute(p, renderer);
    //sixth create a text;
    var text = await this.createText(renderer);
    // seventh append paragraph and text together;
    await this.appendPElementAndText(p, text, renderer);
    //eighth append created paragraph to parentNode;
    await this.appendChildToParent(parent, p, renderer)

    console.log(p)
    console.log(text)
  }

  async getData() {
    return new Promise(resolve => {
      this._http.get<profileSchema>(this.getSrc).subscribe((data: profileSchema) => {
        resolve(this.introduction = data.introduction);
      })
    })
  }

  async hideOldChild(oldChild, renderer) {
    return new Promise(resolve => {
      resolve(renderer.setStyle(oldChild, 'display', 'none'));
    })
  }

  async createParagraphElement(renderer) {
    return new Promise(resolve => {
      resolve(renderer.createElement('p'));
    })
  }

  async setClassAttribute(p, renderer) {
    return new Promise(resolve => {
      resolve(renderer.setAttribute(p, 'class', 'introduction'));
    })
  }

  async setIDAttribute(p, renderer) {
    return new Promise(resolve => {
      resolve(renderer.setAttribute(p, 'id', 'introduction'))
    })
  }

  async createText(renderer) {
    return new Promise(resolve => {
      resolve(renderer.createText(this.introduction))
    })
  }

  async appendPElementAndText(p, text, renderer) {
    return new Promise(resolve => {
      resolve(renderer.appendChild(p, text));
    })
  }

  async appendChildToParent(parent, child, renderer) {
    return new Promise(resolve => {
      resolve(renderer.appendChild(parent, child))
    })
  }
}
