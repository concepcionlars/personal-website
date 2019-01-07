import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AlertBoxComponent } from './alert-box.component';

@Injectable({
  providedIn: 'root'
})
export class AlertBoxService {

  constructor(private alert: MatDialog) { }

  public showAlertBox():void {
    const alertbox = this.alert.open(AlertBoxComponent, {
      height: 'auto',
      width: '300px',
      panelClass: 'customAlertBox'
    })
  }
}
