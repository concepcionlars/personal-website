import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialogRef, MatDialog } from '@angular/material';

import { AlertBoxService } from './alert-box.service';
import { EducationInputFieldComponent } from 'src/app/webpage/webEditor/headers-editor/education-input-field/education-input-field.component';

=======
>>>>>>> f89cf6f69ce440b4b8a38c64c2ae7e36897e2273

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

<<<<<<< HEAD
  constructor(private dialog: MatDialog) { }

  discardChanges(close) {
    close.click();
    const dialogBox = this.dialog.openDialogs.length-2;
    this.dialog.openDialogs[dialogBox].close();
  }


  reject(close) {
    close.click();
  }

  ngOnInit() {

=======
  constructor() { }

  ngOnInit() {
>>>>>>> f89cf6f69ce440b4b8a38c64c2ae7e36897e2273
  }

}
