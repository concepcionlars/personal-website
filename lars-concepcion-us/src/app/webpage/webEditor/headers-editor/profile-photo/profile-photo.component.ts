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
  }

  filesMetadataProcessor(file, result) {
    const imageElement = document.querySelector('.profile-photo');

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
    const rotateElement = document.querySelector('.profile-photo')
    this._renderer.setStyle(rotateElement, 'transform', 'rotate(' + this.Rotate.value + 'deg)')
  }

  setZoomPropertyValue() {
    const zoomElement = document.querySelector('.photo-container')
    this._renderer.setStyle(zoomElement, 'transform', 'scale(' + this.Zoom.value + ',' + this.Zoom.value + ')')
  }

  //============================
  //========= On Save ==========
  //============================

  saveValue() {
    //create a json schema to be sent in server
    //include rotate, straight, and the metadata of selected image
    const imageSetting: ProfilePhotoData = {
      rotate: this.Rotate.value,
      zoom: this.Zoom.value,
      imageProperty: this.metadata
    }

    this._profilePhotoService.saveImageSetting(imageSetting).subscribe(res => alert('upload succesfully'))
  }

  //This function is not yet activated and under development
  //=====================================
  //========== DRAG FUNCTION ============
  //=====================================
  //This function is under construction

  mousemove: any = null;
  mouseup: any = null;
  posXAxis: number = 0;
  posYAxis: number = 0;
  xAxis: number = 0;
  yAxis: number = 0;

  onMouseHold(e) {
    e = e || window.event;
    e.preventDefault();
    const elmnt: HTMLElement = document.querySelector('.boundary') as HTMLElement;
    this.xAxis = e.clientX;
    this.yAxis = e.clientY;

    //on long click trigger this function
    this.mousemove = this._renderer.listen(elmnt, 'mousemove', (event) => this.onMouseMove(event, elmnt))
    //on mouse release trigger this function
    this.mouseup = this._renderer.listen(elmnt, 'mouseup', (event) => this.onMouseUp(event, elmnt))
  }

  onMouseMove(e, el) {
    e = e || window.event;
    e.preventDefault();
    this.posXAxis = e.clientX - this.xAxis;
    this.posYAxis =  e.clientY - this.yAxis;
    var elmntRect = el.getBoundingClientRect();
    var guidelineRect = document.querySelector('.border-radius').getBoundingClientRect();

    var animate = this._renderer.setStyle(el, 'transform', 'translateY(' + (this.posYAxis) + 'px' + ')');

    console.log(elmntRect.top + ' : ' + guidelineRect.top)

    if(elmntRect.top == guidelineRect.top) {
      console.log('stop dragging the element at the top')
      console.log(elmntRect.top + ' : ' + guidelineRect.top)
    } else if (elmntRect.bottom == guidelineRect.bottom) {
      console.log('stop dragging the element at the bottom')
      console.log(elmntRect.bottom + ' : ' + guidelineRect.bottom)
    }
  }

  onMouseUp(e, el) {
    e = e || window.event;
    e.preventDefault();

    this.mousemove();
    this.mouseup();
  }

  ngOnInit() {
    this.createFormGroup();
  }
}
