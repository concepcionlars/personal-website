import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor(private renderer: Renderer2, private dialogRef: MatDialogRef<ContactComponent>) {
    dialogRef.disableClose = true;
  }
  //allow esc to close contact dialog
  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  public wallpaper() {
    const source = 'assets/w.jpg';
    const contactHeader = document.querySelector('.headersWallpaper');
    this.renderer.setStyle(contactHeader, 'background-image', 'url(' + source + ')')
  }

  contactForm = new FormGroup({
    fullname: new FormControl(),
    email: new FormControl(),
    subject: new FormControl(),
    message: new FormControl()
  })

  OnSend() {
    console.log(this.contactForm.value);
  }

  ngOnInit() {
    this.wallpaper();
  }

}
