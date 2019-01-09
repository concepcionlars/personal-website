import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddPortfolioComponent } from './add-portfolio.component';

@Injectable({
  providedIn: 'root'
})

export class AddPortfolioService {

  constructor(private dialog: MatDialog) { }

  openDialogBox() {
    const dialog = this.dialog.open(AddPortfolioComponent, {
      height: '500px',
      width: '700px',
      panelClass: 'Add-Portfolio'
    })
  }
}
