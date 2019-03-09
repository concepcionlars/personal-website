import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, FormArray } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { HeadersData } from 'src/app/customTSFIle/headersData/headersFormValue';
import { ImagePreloaderService } from 'src/app/customTSFIle/image-preloader/image-preloader.service';
import { HeadersEditorService } from './headers-editor.service';
import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { EducationInputFieldComponent } from '../headers-editor/education-input-field/education-input-field.component';
import { ProfilePhotoComponent } from 'src/app/admin/user_interface/headers-editor/profile-photo/profile-photo.component';
import { CoverPhotoComponent } from 'src/app/admin/user_interface/headers-editor/cover-photo/cover-photo.component';
import { PersonalBrandComponent } from 'src/app/admin/user_interface/headers-editor/personal-brand/personal-brand.component';
import { TimelineService } from 'src/app/client/timeline/timeline.service';

@Component({
  selector: 'app-headers-editor',
  templateUrl: './headers-editor.component.html',
  styleUrls: ['./headers-editor.component.css']
})
export class HeadersEditorComponent implements OnInit {

  constructor(private timelineService: TimelineService, private _headersService: HeadersEditorService, private preloaderService: ImagePreloaderService, private alertservice:AlertBoxService, private dialog: MatDialog, private dialogRef: MatDialogRef<HeadersEditorComponent>) {
    this.profileInformation = this.createFormGroup();
    dialogRef.disableClose = true;
  }

  @HostListener('window:keyup.esc') onkeyup(){
    this.dialogRef.close();
  }

  profile ="assets/m.jpg";
  wallpaper = "assets/c.png";
  logo = "assets/l.png";
  profileInformation: FormGroup;

  public createFormGroup() {
    return new FormGroup({
      // owners personal information
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      headline: new FormControl(''),
      //owners address information
      address: new FormGroup({
        country: new FormControl(''),
        // region: new FormControl(''),
        zipCode: new FormControl('')
      }),
      //introduction
      introduction: new FormControl(''),
      //education
      schoolName: new FormControl(''),
      //summary
      summary: new FormControl('')

    })
  }

  //======================
  // Forms Getter
  //======================
  // owners personal information getter
  get Firstname() {
    return this.profileInformation.get('firstname');
  }
  get Lastname() {
    return this.profileInformation.get('lastname');
  }
  get Headline() {
    return this.profileInformation.get('headline');
  }
  get Address() {
    return this.profileInformation.get('address') as FormArray;
  }
  get Country() {
    return this.Address.get('country');
  }
  get Zip() {
    return this.Address.get('zipCode');
  }
  get Introduction() {
    return this.profileInformation.get('introduction');
  }
  get schoolName() {
    return this.profileInformation.get('schoolName');
  }
  get Summary() {
    return this.profileInformation.get('summary');
  }

  //==================================
  //ON SAVE SEND A REQUEST TO A SERVER
  //==================================
  OnSave() {
    //==============================================
    //COLLECT ALL USER INPUT AND SAVE TO JSON SCHEMA 
    //==============================================
    const userInformation: HeadersData = {
      firstname: this.Firstname.value,
      lastname: this.Lastname.value,
      headline: this.Headline.value,
      introduction: this.Introduction.value,
      summary: this.Summary.value,
      schoolName: this.schoolName.value,
      address: {
        country: this.Country.value,
        zip: this.Zip.value
      }
    }
    this._headersService.sendForm(userInformation).subscribe(res => console.log(res))
  }

  //=====================
  // DIALOG BOX FUNCTIONS
  //=====================

  openAlertBox() {
    this.alertservice.showAlertBox();
  }

  //Cover photo Uploader
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
