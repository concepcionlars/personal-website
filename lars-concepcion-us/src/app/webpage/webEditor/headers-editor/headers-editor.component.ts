import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { summaryFileName } from '@angular/compiler/src/aot/util';

import { EducationInputFieldComponent } from '../headers-editor/education-input-field/education-input-field.component';


@Component({
  selector: 'app-headers-editor',
  templateUrl: './headers-editor.component.html',
  styleUrls: ['./headers-editor.component.css']
})
export class HeadersEditorComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<HeadersEditorComponent>) {
    this.profileInformation = this.createFormGroup();
    dialogRef.disableClose = true;
  }

  @HostListener('window:keyup.esc') onkeyup(){
    this.dialogRef.close();
  }

  profileInformation: FormGroup;
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
      position: new FormControl(''),

      //education
      education: new FormGroup({

      }) 
    })
  }

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
    return this.profileInformation.get('Firstname');
  }
  get Lastname() {
    return this.profileInformation.get('lastname');
  }

  //=================
  // FUNCTIONS
  //=================
  openDialogBox(): void{
    const dialogRef = this.dialog.open(EducationInputFieldComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'education-input-field'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Dialog was Closed')
    })
  }

  ngOnInit() {
    this.createFormGroup();
  }

}
