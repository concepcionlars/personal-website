import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from  '@angular/forms';

import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';

@Component({
  selector: 'app-personal-brand',
  templateUrl: './personal-brand.component.html',
  styleUrls: ['./personal-brand.component.css']
})
export class PersonalBrandComponent implements OnInit {

  constructor(private _renderer: Renderer2, private _alertBoxService: AlertBoxService) {
    this.personalBrandProperty = this.createFormGroup();
  }

  personal_brand = 'src/assets/l.png';
  metadata = {
    name: String,
    size: Number,
    type: String,
    blob: String
  }

  //trigger this function when the user click the close/cancel button
  openAlertBox() {
    this._alertBoxService.showAlertBox();
  }

  //=========================
  //===== FORM CONTROL ======
  //=========================
  personalBrandProperty: FormGroup;

  public createFormGroup() {
    return new FormGroup({
      image: new FormControl(''),
      zoom: new FormControl(1),
      rotate: new FormControl(0)
    })
  }

  //getter
  get Image() {
    return this.personalBrandProperty.get('image');
  }

  get Zoom() {
    return this.personalBrandProperty.get('zoom')
  }

  get Rotate() {
    return this.personalBrandProperty.get('rotate');
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
    const imageElement = document.querySelector('.personal-brand');

    this.metadata = {
      name: file.name,
      size: file.size,
      type: file.type,
      blob: result
    }

    this._renderer.setAttribute(imageElement, 'src', result)
  }

  //====================================
  //========= zoom and rotate ==========
  //====================================

  setRotatePropertyValue() {
    const rotateElement = document.querySelector('.personal-brand')
    this._renderer.setStyle(rotateElement, 'transform', 'rotate(' + this.Rotate.value + 'deg)')
  }

  setZoomPropertyValue() {
    const zoomElement = document.querySelector('.personal-brand-container')
    this._renderer.setStyle(zoomElement, 'transform', 'scale(' + this.Zoom.value + ',' + this.Zoom.value + ')')
  }

  ngOnInit() {
    this.createFormGroup();
  }

}
