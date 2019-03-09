import { Component, OnInit, Renderer2, ChangeDetectorRef} from '@angular/core';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { FormControl, FormGroup, Validators } from  '@angular/forms';

import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { ProfilePhotoService } from './profile-photo.service';
import { ProfilePhotoData } from 'src/app/customTSFIle/headersData/profile-photo-data';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {

  constructor(private _renderer: Renderer2, private _alertBoxService: AlertBoxService, private _profilePhotoService: ProfilePhotoService) { 
    this.imageProperty = this.createFormGroup();
  }

  profile_photo = 'src/assets/m.jpg';
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

  //=============
  //FORM CONTROL
  //=============
  imageProperty: FormGroup;

  public createFormGroup() {
    return new FormGroup({
      image: new FormControl(''),
      zoom: new FormControl(1),
      rotate: new FormControl(0)
    })
  }

  //getter
  get Image() {
    return this.imageProperty.get('image');
  }

  get Zoom() {
    return this.imageProperty.get('zoom')
  }

  get Rotate() {
    return this.imageProperty.get('rotate');
  }

  //====================================
  //============ On Change =============
  //====================================

  onchange(e) {
    const imageElement = document.querySelector('.profile-photo')
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

    this.button();
  }

  filesMetadataProcessor(file, result) {
    const imageElement = document.querySelector('.profile-photo');
    var blobs;

    this._renderer.setAttribute(imageElement, 'src', result)

    //create a function to dissect blob binary data
    if(file.type === 'image/jpg' || file.type === 'image/jpeg' ) {
      blobs = result.slice(22, result.length)

      this.metadata = {
        name: file.name,
        size: file.size,
        type: file.type,
        blob: blobs
      }

    } else if(file.type === 'image/png' || file.type === 'image/gif') {
      blobs = result.slice(22, result.length);

      this.metadata = {
        name: file.name,
        size: file.size,
        type: file.type,
        blob: blobs
      }

    }
  }

  //====================================
  //========= zoom and rotate ==========
  //====================================

  setRotatePropertyValue() {
    const rotateElement = document.querySelector('.profile-photo')
    this._renderer.setStyle(rotateElement, 'transform', 'rotate(' + this.Rotate.value + 'deg)')
    this.button()
  }

  setZoomPropertyValue() {
    const zoomElement = document.querySelector('.photo-container')
    this._renderer.setStyle(zoomElement, 'transform', 'scale(' + this.Zoom.value + ',' + this.Zoom.value + ')')
    this.button()
  }

  //============================
  //========= On Save ==========
  //============================

  saveValue() {

    if(this.Zoom.value == 1 && this.Rotate.value == 0 && this.Image.value == '') {
      //FOR the script kiddies enable the button using js in the console
      alert('Stop Doing Some Malicious scripting at the console')
      this.disableButton();
    } else {
    //create a json schema to be sent in server
    //include rotate, straight, and the metadata of selected image
    const imageSetting: ProfilePhotoData = {
      rotate: this.Rotate.value,
      zoom: this.Zoom.value,
      schemaType: 'personal_photo',
      imageProperty: this.metadata
    }

    this._profilePhotoService.saveImageSetting(imageSetting).subscribe(res => console.log(res))
    }
  }

  button() {
    if(this.Zoom.value == 1 && this.Rotate.value == 0 && this.Image.value == '') {
      this.disableButton();
    } else {
      this.enableButton();
    }
  }

  //Is this a dry code?
  disableButton() {
    const saveBtn : HTMLElement = document.querySelector('.save')
    this._renderer.setStyle(saveBtn, 'pointer-events', 'none');
    this._renderer.setStyle(saveBtn, 'opacity', '0.5');
    this._renderer.removeAttribute(saveBtn, '(click)')
  }

  enableButton() {
    const saveBtn : HTMLElement = document.querySelector('.save')
    this._renderer.setStyle(saveBtn, 'pointer-events', 'auto');
    this._renderer.setStyle(saveBtn, 'opacity', '1.0');
  }

  ngOnInit() {
    this.createFormGroup();
    this.disableButton()
  }
}
