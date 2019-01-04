import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AlertBoxComponent } from 'src/app/popup_module/alert-box/alert-box.component';

@Component({
  selector: 'app-education-input-field',
  templateUrl: './education-input-field.component.html',
  styleUrls: ['./education-input-field.component.css']
})
export class EducationInputFieldComponent implements OnInit {

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

  ngOnInit() {
  }

}
