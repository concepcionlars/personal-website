import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { AlertBoxService } from './alert-box.service';
import { EducationInputFieldComponent } from 'src/app/admin/user_interface/headers-editor/education-input-field/education-input-field.component';


@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  discardChanges(close) {
    close.click();
    const dialogBox = this.dialog.openDialogs.length-2;
    this.dialog.openDialogs[dialogBox].close();
  }


  reject(close) {
    close.click();
  }

  ngOnInit() {}

}
