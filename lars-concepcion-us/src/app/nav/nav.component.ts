import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '500px',
      height: '500px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
  }

}

//@contact dialog
@Component({
  selector: 'app-contact',
  templateUrl: '../webpage/contact/contact.component.html',
})
export class ContactComponent {

  constructor(
    public dialogRef: MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}
}
