import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
<<<<<<< HEAD
import { MatDialogRef } from '@angular/material';


import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
=======
import { MatDialogRef, MatDialog } from '@angular/material';
import { AlertBoxComponent } from 'src/app/popup_module/alert-box/alert-box.component';
>>>>>>> f89cf6f69ce440b4b8a38c64c2ae7e36897e2273

@Component({
  selector: 'app-education-input-field',
  templateUrl: './education-input-field.component.html',
  styleUrls: ['./education-input-field.component.css']
})
export class EducationInputFieldComponent implements OnInit {

<<<<<<< HEAD
  constructor(private alertservice: AlertBoxService, private dialogRef: MatDialogRef<EducationInputFieldComponent>) {
    dialogRef.disableClose = true;
  }

  private openAlertBox() {
    this.alertservice.showAlertBox();
  }
  
=======
  constructor(private alert: MatDialog, private dialogRef: MatDialogRef<EducationInputFieldComponent>) {
    dialogRef.disableClose = true;
  }

  openAlertBox() :void{
    const alertBox = this.alert.open(AlertBoxComponent, {
      height: '100px',
      width: '300px',
      panelClass: 'customAlertBox'
    })
  }

>>>>>>> f89cf6f69ce440b4b8a38c64c2ae7e36897e2273
  ngOnInit() {
  }

}
