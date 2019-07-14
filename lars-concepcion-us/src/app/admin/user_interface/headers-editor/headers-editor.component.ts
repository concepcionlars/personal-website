import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
//=================================================
//========= Customize TypeScript Files ============
//=================================================
import { ProfileImageMetadata } from '../../../customTSFIle/profileImageMetadata';
import { profileSchema } from '../../../customTSFIle/profileSchema';
//==============================================
//============= Injected Component =============
//==============================================
// import { EducationInputFieldComponent } from 'src/app/admin/user_interface/headers-editor/education-input-field/education-input-field.component';
import { ProfilePhotoComponent } from 'src/app/admin/user_interface/headers-editor/profile-photo/profile-photo.component';
import { CoverPhotoComponent } from 'src/app/admin/user_interface/headers-editor/cover-photo/cover-photo.component';
import { PersonalBrandComponent } from 'src/app/admin/user_interface/headers-editor/personal-brand/personal-brand.component';
import { LeftSidebarComponent } from 'src/app/main/left-sidebar/left-sidebar.component';
//==============================================
//============= Injected Service ===============
//==============================================
import { MainService } from '../../../main/main.service';
import { TimelineService } from 'src/app/client/timeline/timeline.service';
import { ImagePreloaderService } from 'src/app/customTSFIle/image-preloader/image-preloader.service';
import { HeadersEditorService } from './headers-editor.service';
import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { ProfilePhotoService } from 'src/app/admin/user_interface/headers-editor/profile-photo/profile-photo.service';
import { ImageStyleService } from '../../../customTSFIle/image_setter/image-style.service';
import { Data } from 'src/app/customTSFIle/contactFormValue';


@Component({
  selector: 'app-headers-editor',
  templateUrl: './headers-editor.component.html',
  styleUrls: ['./headers-editor.component.css'],
  providers: [LeftSidebarComponent]
})

export class HeadersEditorComponent implements OnInit {

  constructor(
    private leftSidebarComponent : LeftSidebarComponent,
    private mainService: MainService,
    private profilePhotoService: ProfilePhotoService,
    private timelineService: TimelineService, 
    private _headersService: HeadersEditorService, 
    private preloaderService: ImagePreloaderService, 
    private alertservice:AlertBoxService, 
    private dialog: MatDialog,
    private imageSetter: ImageStyleService,                                                                                                                                      
    ) {}

  @Output() sharedData = new EventEmitter<any>();
  @ViewChild('profileForm') ngForm : NgForm;


  metadata : ProfileImageMetadata;

  get() {
    this.mainService.getHeaderImage().subscribe((data: ProfileImageMetadata) => this.metadata = data);
  };

  //==========================================================================
  //========================= SERVER REQUEST HANDLER =========================
  //==========================================================================
  redoValue: profileSchema;
  selected = {
    _id: '',
    schoolname: '',
  }
  prof: profileSchema = {
    firstname : '',
    lastname : '',
    primary : false,
    headline : '',
    introduction : '',
    summary : '',
    country : '',
    zip : null,
    education : [],
    profilePhoto : [],
    coverPhoto : [],
    logo : []
  };

  getMetadata() {
    return this._headersService.getData().subscribe((data: profileSchema) => {
      this.prof = data;

      for(var i = 0; i < this.prof.education.length; i++) {
        if(this.prof.education[i].selected === true) {
          this.selected._id = this.prof.education[i]._id.toString();
          this.selected.schoolname = this.prof.education[i].schoolname.toString();
        }
      }
    })
  }

  getRedoValue() {
    return this._headersService.getData().subscribe((data: profileSchema) => this.redoValue = data)
  }

  //when the user click cancel or close the modal
  //run this function
  onRedo(f, c) {
    this.sharedData.emit(this.redoValue);
    f.resetForm(this.redoValue);
    c.click()
  }

  validateOnSubmit(s, c, f) {
    if(!f.valid) {
      alert('something wrong with your form')
      f.controls.firstname.markAsTouched();
      f.controls.lastname.markAsTouched();
      f.controls.headline.markAsTouched();
      f.controls.selectedSchool.markAsTouched();
    } else {
      s.click();
      c.click();
    }
  }

  OnSave(e) {
    console.log(e.value)
    //==============================================
    //========= SEND ALL DATA TO SERVER ============
    //==============================================
    this._headersService.sendForm(e.value).subscribe(res => {
      if(res['statusCode'] === 200) {
        this.leftSidebarComponent.updateIntroduction();
      }
    });
  }

  //============================================
  //========== DIALOG BOX FUNCTIONS ============
  //============================================
  profilePhotoData: Object;

  //popup alert
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

  // educationInputField(): void{
  //   const education = this.dialog.open(EducationInputFieldComponent, {
  //     width: '700px',
  //     height: '500px',
  //     panelClass: 'education-input-field'
  //   })
  // }

  ngOnInit() {
    this.getMetadata()
    this.get();
    this.getRedoValue();
    this.ngForm.form.valueChanges.subscribe(x => {
      this.sharedData.emit(x)
    })
  }

}
