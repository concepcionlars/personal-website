import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProfileImageMetadata } from '../customTSFIle/profileImageMetadata';
import { ContactComponent } from '../client/contact/contact.component';
import { MainService } from '../main/main.service';
import { ImageStyleService } from '../customTSFIle/image_setter/image-style.service';


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

  constructor(
    private imageSetter: ImageStyleService,
    private mainService: MainService, 
    private dialog: MatDialog) { }

  @Input() ngStyle : String;

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

  metadata : ProfileImageMetadata;

  get() {
    this.mainService.getHeaderImage().subscribe((data : ProfileImageMetadata) => this.metadata = data);
  }

  //set zoom and rotation value;
  markOne(value: number) {
    return this.imageSetter.rotationStyle(value)
  }
  markTwo(value: number) {
    return this.imageSetter.zoomStyle(value);
  }

  ngOnInit() {
    this.get();
  }

}