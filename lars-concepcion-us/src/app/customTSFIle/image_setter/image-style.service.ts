import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageStyleService {

  constructor() { }

  zoomStyle(value : Number) {
    let style = {
      '-webkit-transform' : 'scale('+ value + ',' + value +')',
      '-moz-transform' : 'scale('+ value + ',' + value +')',
      '-ms-transform' : 'scale('+ value + ',' + value +')',
      '-o-transform' : 'scale('+ value + ',' + value +')',
      'transform' : 'scale('+ value + ',' + value +')'
    }
    return style;
  }
  
  rotationStyle(value: number) {
    let style = {
      '-webkit-transform' : 'rotate(' + value + 'deg)',
    }
    return style;
  }
}
