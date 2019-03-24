import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { profileSchema } from '../../../customTSFIle/profileSchema';
import { HeadersData } from 'src/app/customTSFIle/headersData/headersFormValue';
import { ImagePreloaderService } from 'src/app/customTSFIle/image-preloader/image-preloader.service';
import { HeadersEditorService } from './headers-editor.service';
import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { EducationInputFieldComponent } from '../headers-editor/education-input-field/education-input-field.component';
import { ProfilePhotoComponent } from 'src/app/admin/user_interface/headers-editor/profile-photo/profile-photo.component';
import { ProfilePhotoService } from 'src/app/admin/user_interface/headers-editor/profile-photo/profile-photo.service';
import { imageFileData } from 'src/app/customTSFIle/headersData/imageFileData';
import { CoverPhotoComponent } from 'src/app/admin/user_interface/headers-editor/cover-photo/cover-photo.component';
import { PersonalBrandComponent } from 'src/app/admin/user_interface/headers-editor/personal-brand/personal-brand.component';
import { TimelineService } from 'src/app/client/timeline/timeline.service';

@Component({
  selector: 'app-headers-editor',
  templateUrl: './headers-editor.component.html',
  styleUrls: ['./headers-editor.component.css']
})

export class HeadersEditorComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) private data: any,
    private profilePhotoService: ProfilePhotoService,
    private timelineService: TimelineService, private _headersService: HeadersEditorService, 
    private preloaderService: ImagePreloaderService, private alertservice:AlertBoxService, 
    private dialog: MatDialog, private dialogRef: MatDialogRef<HeadersEditorComponent>
    ) {
    dialogRef.disableClose = true;
  }

  @HostListener('window:keyup.esc') onkeyup(){
    this.dialogRef.close();
  }

  profile ="assets/m.jpg";
  wallpaper = "assets/c.png";
  logo = "assets/l.png";
  title = 'testing';

  //==========================================================================
  //========================= SERVER REQUEST HANDLER =========================
  //==========================================================================
  prof: profileSchema;

  get() {
    return this._headersService.getData().subscribe((data: profileSchema) => this.prof = data)
  }

  OnSave(e) {
    //==============================================
    //COLLECT ALL USER INPUT AND SAVE TO JSON SCHEMA 
    //==============================================
    console.log(e.value)
  }

  //=====================
  // DIALOG BOX FUNCTIONS
  //=====================
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
    this.get();
    console.log(Math.random() * 10)
  }

}
