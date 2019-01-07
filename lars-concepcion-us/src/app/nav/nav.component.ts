import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactComponent } from '../webpage/contact/contact.component';
import { componentFactoryName } from '@angular/compiler';

export interface DialogData {
  animal: string;
  name: string;
}

//@title dialog overview
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openContactDialog(): void{
    let dialogRef = this.dialog.open(ContactComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'custom-modalbox'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    // this.openContactDialog();
  }

}