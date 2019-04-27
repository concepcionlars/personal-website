import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from  '@angular/forms';
import { MatDialogRef } from '@angular/material';

//======================================================================
//================ INJECTED CUSTOMIZE TYPESCRIPT FILE ==================
//======================================================================
import { ProfileImageMetadata } from 'src/app/customTSFIle/profileImageMetadata';
import { imageFileData } from 'src/app/customTSFIle/headersData/imageFileData';
//======================================================================
//========================= INJECTED SERVICE ===========================
//======================================================================
import { MainService } from 'src/app/main/main.service';
import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { HeadersEditorService } from 'src/app/admin/user_interface/headers-editor/headers-editor.service';

@Component({
  selector: 'app-personal-brand',
  templateUrl: './personal-brand.component.html',
  styleUrls: ['./personal-brand.component.css']
})
export class PersonalBrandComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private dialogRef: MatDialogRef<PersonalBrandComponent>, 
    private _headerEditorService: HeadersEditorService, 
    private _renderer: Renderer2, 
    private _alertBoxService: AlertBoxService) {
    this.dialogRef.disableClose = true;
    this.personalBrandProperty = this.createFormGroup();
  }

  //==========================================================================
  //===================== DISPLAY IMAGE FROM DATABASE ========================
  //==========================================================================
  metadata: ProfileImageMetadata;

  get() {
    return this.mainService.getHeaderImage().subscribe((data: ProfileImageMetadata) => this.metadata = data);
  }

  //==========================================================================
  //================= COMPONENT FUNCTION AND CONFIGURATION ===================
  //==========================================================================
  property = {
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

  //====================================
  //============ On Change =============
  //====================================

  onchange(e) {
    const imageElement = document.querySelector('.personal-brand');
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
    const imageElement = document.querySelector('.personal-brand');
    var blobs;

    this._renderer.setAttribute(imageElement, 'src', result)

    //create a function to dissect blob binary data
    if(file.type === 'image/jpg' || file.type === 'image/jpeg' ) {
      blobs = result.slice(22, result.length)

      this.property = {
        name: file.name,
        size: file.size,
        type: file.type,
        blob: blobs
      }

    } else if(file.type === 'image/png' || file.type === 'image/gif') {
      blobs = result.slice(22, result.length);

      this.property = {
        name: file.name,
        size: file.size,
        type: file.type,
        blob: blobs
      }

    }
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
      const imageSetting: imageFileData = {
        rotate: this.Rotate.value,
        zoom: this.Zoom.value,
        schemaType: 'logo',
        imageProperty: this.property
      }

      //Send A post Request
      this._headerEditorService.saveImageSetting(imageSetting).subscribe(res => {const data = res})
      this.dialogRef.close();
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
    this.get();
    this.createFormGroup();
  }

}
