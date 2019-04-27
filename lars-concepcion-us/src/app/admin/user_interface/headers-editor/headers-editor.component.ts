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
import { ProfilePhotoComponent } from 'src/app/admin/user_interface/headers-editor/profile-photo/profile-photo.component';
import { CoverPhotoComponent } from 'src/app/admin/user_interface/headers-editor/cover-photo/cover-photo.component';
import { PersonalBrandComponent } from 'src/app/admin/user_interface/headers-editor/personal-brand/personal-brand.component';
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


@Component({
  selector: 'app-headers-editor',
  templateUrl: './headers-editor.component.html',
  styleUrls: ['./headers-editor.component.css']
})

export class HeadersEditorComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private profilePhotoService: ProfilePhotoService,
    private timelineService: TimelineService, 
    private _headersService: HeadersEditorService, 
    private preloaderService: ImagePreloaderService, 
    private alertservice:AlertBoxService, 
    private dialog: MatDialog,
    private imageSetter: ImageStyleService,                                                                                                                                      
    ) {}

    profilePhoto = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACfCAMAAADQxfvSAAAAMFBMVEXk5ueutLfd3+CqsbTn6erh4+S1u73X2tvO0dOzuLu9wsTHy826v8HEyMrS1tfLz9BpC6ihAAADuklEQVR4nO2b27KrIAxAFQLKRfz/v91Y2117sYYgwQfWzDkP+2lNMBBC2nWNRqPRaDQajUaj0Wg0Go1G4xqo2gJ7ACgR5sla7611cxAd1FbaADA4b/oFefu/N9aJyxiKWcu71xMp9Shqm0Wgc/rd7W7Y+xFqB1GN/UfoNoomVLUDYfflVpyqGMLxyC6ih2p6DqEXCZUiiNTrzVhFcELqRSoIgvuRt59LzO6HSY3NEjN/gzCYJL/eMJcOO2fGLnJiFUz6+FY4cyR1dW/w6YEn6MmZzW9IX92I4TrolCX59Y7JL5Ds4grzpDAkHGyvfjwprGirG9EcAYRA9uPJkMOSeR+ODBGpR9sTaRn8Bnr4WKqEtMLqLYAMHyB1d7n5ld9hlCen71JllfejlC7/fvbafr0urdeJHL3L+5XfYERGerD4XT1+eX6l9TqV5Vc+P/L8fPkK9eLnR0e8HK1+rrwftuv31Y+hj0W9vd1geHEg9TbucFyQFKW5cWcqr5fYOH2FpY1KP4ENz4MX9QInOZY3MlP9mBpY1Buw59GLAaR9gSOXX0exk5atQw6UM47r61sg7NGSobR6kt6E0ayP/cmHCEfl8sKUJshQ+L2iTIIgY+4+AIXfpVn6kh8MGhlBqavMSAD2nONf3DsCdVdiqlq+oQ4PEsl46n4Bhp/XYRnXtvKEk3L7G43U4QITgWo232awlvGwC9gtiGDfFGVvplB7aZ9Ap8K0TCiuc4DGuriwl7FbiY5KDBER1S7mtox4vlFb6MkStjBPk/daaxP/aW8nNy5xrJsf0EUxZ+N3Jxe26bH+QfspatZabTFajegVaTsNzHEEJcbJfM7s7m3T8RiZB7bdBrrB6l9TsV8xemQxVMGiA/cexmUiuqgjqNEnR25j2GsnCmaLyOk9P4JoC93TQThsQX8QxDKGc9bD7yvnV/zhlNg9kP18ZjKDyhmK+I4/b5FhTLmLoznr3nR8CaIRM/mMNc6YZzrkhKZRODFtP3GZiQw500wIMjszKuOtCCnoc/qWiU0+kmDGm2Hx6N0gR5BHLy4xKYKlU2MDZaeGrHfyNCgPhyW35U/Sf77Cqpc8mAAjT278k1gR5gxB0Egbjc6YwaaSsMJA+4FHFkmjqczJsYIvqPl25i3oTVBV+Pr6hF83MJ4cW7DDd5AzQZcFMn6V7HqJO+VyfkCRBy5Dzr+LY0HNKIiM+blcMBnMW1i9gnnrrLS7LKB2mDqHx4o+9gOGO+U+CD8rK4L4/pSoCMKv0Wg0Go1G49r8AYBYLcR6wymPAAAAAElFTkSuQmCC';

  @Input() ngStyle = String;
  @Output() sharedData = new EventEmitter<any>();
  @ViewChild('profileForm') ngForm : NgForm;

  metadata: ProfileImageMetadata;

  GetMetadata() {
    return this.mainService.getHeaderImage().subscribe((data: ProfileImageMetadata) => this.metadata = data);
  }

  //set the zoom and rotation of an element dynamically
  markOne(value: number) {
    return this.imageSetter.rotationStyle(value);
  }
  markTwo(value: number) {
    return this.imageSetter.zoomStyle(value);
  }

  //==========================================================================
  //========================= SERVER REQUEST HANDLER =========================
  //==========================================================================
  redoValue: profileSchema;
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

  get() {
    return this._headersService.getData().subscribe((data: profileSchema) => this.prof = data)
  }

  getRedoValue() {
    return this._headersService.getData().subscribe((data: profileSchema) => this.redoValue = data)
  }

  //when the user click cancel or close the modal
  //run this function
  onRedo(f) {
    this.sharedData.emit(this.redoValue);
    f.resetForm(this.redoValue);
  }

  validateOnSubmit(s, f) {
    if(!f.valid) {
      alert('something wrong with your form')
      f.controls.firstname.markAsTouched();
      f.controls.lastname.markAsTouched();
      f.controls.headline.markAsTouched();
      f.controls.schoolname.markAsTouched();
      // console.log(f.value);
    } else {
      s.click();
    }
  }

  OnSave(e) {
    console.log(e.value)
    //==============================================
    //========= SEND ALL DATA TO SERVER ============
    //==============================================
    this._headersService.sendForm(e.value).subscribe(res => console.log(res));
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

  ngOnInit() {
    this.GetMetadata();
    this.get();
    this.getRedoValue();
    this.ngForm.form.valueChanges.subscribe(x => {
      this.sharedData.emit(x)
    })
  }

}
