import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';


import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';

@Component({
  selector: 'app-education-input-field',
  templateUrl: './education-input-field.component.html',
  styleUrls: ['./education-input-field.component.css']
})
export class EducationInputFieldComponent implements OnInit {

  constructor(private alertservice: AlertBoxService, private dialogRef: MatDialogRef<EducationInputFieldComponent>) {
    dialogRef.disableClose = true;
  }

  private openAlertBox() {
    this.alertservice.showAlertBox();
  }
  
  ngOnInit() {
  }

}
