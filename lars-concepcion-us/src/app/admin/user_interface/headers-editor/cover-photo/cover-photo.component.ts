import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.css']
})
export class CoverPhotoComponent implements OnInit {

  constructor(private _renderer: Renderer2, private _alertBoxService: AlertBoxService) {
    this.coverProperty = this.createFormGroup();
  }

  cover_photo = 'src/assets/c.png'
  metadata = {
    name: String,
    size: Number,
    type: String,
    blob: String,
  }

  //trigger this function when the user click the close/cancel button
  openAlertBox() {
    this._alertBoxService.showAlertBox();
  }

  //===========================
  //====== FORM CONTROL =======
  //===========================
  coverProperty: FormGroup;

  public createFormGroup() {
    return new FormGroup({
      image: new FormControl(''),
      zoom: new FormControl(1),
      rotate: new FormControl(0)
    })
  }

  //getter
    get Image() {
      return this.coverProperty.get('image');
    }
  
    get Zoom() {
      return this.coverProperty.get('zoom')
    }
  
    get Rotate() {
      return this.coverProperty.get('rotate');
    }

  //====================================
  //========= zoom and rotate ==========
  //====================================

  setRotatePropertyValue() {
    const rotateElement = document.querySelector('.cover-photo')
    this._renderer.setStyle(rotateElement, 'transform', 'rotate(' + this.Rotate.value + 'deg)')
  }

  setZoomPropertyValue() {
    const zoomElement = document.querySelector('.cover-container')
    this._renderer.setStyle(zoomElement, 'transform', 'scale(' + this.Zoom.value + ',' + this.Zoom.value + ')')
  }

   //====================================
  //============ On Change =============
  //====================================

  onchange(e) {
    const selectedImage = e.target.files[0];

    try {
      const filereader = new FileReader()
      filereader.onload = () => {
        this.filesMetadataProcessor(selectedImage, filereader.result)
      }
      filereader.readAsDataURL(selectedImage);
    }
    catch(e) {
      try {
        const objectUrl = URL.createObjectURL(selectedImage)

        this.filesMetadataProcessor(selectedImage, objectUrl)
      }
      finally {
        alert('all web api for this file upload is not supported')
      }
    }
  }

  filesMetadataProcessor(file, result) {
    const imageElement = document.querySelector('.cover-photo');

    this.metadata = {
      name: file.name,
      size: file.size,
      type: file.type,
      blob: result
    }

    this._renderer.setAttribute(imageElement, 'src', result)
  }

  saveValue() {
    console.log(this.metadata)
  }

  ngOnInit() {
    this.createFormGroup();
  }

}
