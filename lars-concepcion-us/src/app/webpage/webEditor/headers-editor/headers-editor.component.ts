import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ImagePreloaderService } from 'src/app/customTSFIle/image-preloader/image-preloader.service';
import { Property } from 'src/app/customTSFIle/image-preloader/image-property';
import { HeadersEditorService } from './headers-editor.service';
import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { EducationInputFieldComponent } from '../headers-editor/education-input-field/education-input-field.component';
import { ProfilePhotoComponent } from 'src/app/webpage/webEditor/headers-editor/profile-photo/profile-photo.component';
import { CoverPhotoComponent } from 'src/app/webpage/webEditor/headers-editor/cover-photo/cover-photo.component';
import { PersonalBrandComponent } from 'src/app/webpage/webEditor/headers-editor/personal-brand/personal-brand.component';


@Component({
  selector: 'app-headers-editor',
  templateUrl: './headers-editor.component.html',
  styleUrls: ['./headers-editor.component.css']
})
export class HeadersEditorComponent implements OnInit {

  profileInformation: FormGroup;

  constructor(private preloaderService: ImagePreloaderService, private alertservice:AlertBoxService, private dialog: MatDialog, private dialogRef: MatDialogRef<HeadersEditorComponent>) {
    this.profileInformation = this.createFormGroup();
    dialogRef.disableClose = true;
  }

  @HostListener('window:keyup.esc') onkeyup(){
    this.dialogRef.close();
  }

  profile ="assets/m.jpg";
  wallpaper = "assets/c.png";
  logo = "assets/l.png";

  public createFormGroup() {
    return new FormGroup({
      // profile and wallpaper
      profile: new FormControl(''),
      wallpaper: new FormControl(''),
      brand: new FormControl(''),

      // owners personal information
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      headline: new FormControl(''),

      //owners address information
      country: new FormControl(''),
      zipCode: new FormControl(''),

      //introduction
      introduction: new FormControl(''),

      //education
      schoolName: new FormControl('')
    })
  }

  //======================
  // Forms Getter
  //======================
  get Profile() {
    return this.profileInformation.get('profile'); 
  }
  get Wallpaper() {
    return this.profileInformation.get('wallpaper');
  }
  get Brand() {
    return this.profileInformation.get('brand');
  }

  // owners personal information getter
  get Firstname() {
    return this.profileInformation.get('firstname');
  }
  get Lastname() {
    return this.profileInformation.get('lastname');
  }

  //====================
  // IMAGE PRELOADER FILE
  //====================
  selectedFile(file) {
    const files = file.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const metadata: Property = {
        filename: files.name,
        type: files.type,
        size: files.size,
        blob: reader.result.toString(),
      }
      this.preloaderService.sendARequest(metadata).subscribe(res => alert(res));
    }

    reader.readAsDataURL(files);
  }

  OnSave() {
    console.log(this.profileInformation.value);
  }

  //=================
  // FUNCTIONS
  //=================

  openAlertBox() {
    this.alertservice.showAlertBox();
  }

  //Cover or Wallpaper Uploader
  changeCover(): void {
    const CoverUploaderComponent = this.dialog.open(CoverPhotoComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'cover-photo-uploader'
    })
  }

  //Profile Photo Editor Uploader
  profilePhotoUploader(): void {
    const ProfileUploaderComponent = this.dialog.open(ProfilePhotoComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'profile-photo-uploader'
    })
  }

  //Personal Brand Uploader
  personalBrand(): void{
    const PersonalBrandUploader = this.dialog.open(PersonalBrandComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'personal-brand-uploader'
    })
  }

  //Education Input Field
  openDialogBox(): void{
    const EducationInputComponent = this.dialog.open(EducationInputFieldComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'education-input-field'
    })

    EducationInputComponent.afterClosed().subscribe(result => {
      console.log('The Dialog was Closed')
    })
  }

  ngOnInit() {
    this.createFormGroup();
  }

}
