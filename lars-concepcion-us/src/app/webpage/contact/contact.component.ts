import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { ContactService } from './contact.service';;

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  errorMessage = "your message";
  submitted = false;

  constructor(private _contactService: ContactService, private renderer: Renderer2, private dialogRef: MatDialogRef<ContactComponent>) {
    dialogRef.disableClose = true;
    this.contactForm = this.createFormGroup();
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

  createFormGroup() {
    return new FormGroup({
      Fullname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+ +[a-zA-Z].+ +[a-zA-Z]+$')]),
      Email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required])
    })
  }

  get fullname() {
    return this.contactForm.get('Fullname');
  }

  get email() {
    return this.contactForm.get('Email');
  }

  get subject() {
    return this.contactForm.get('Subject');
  }

  get message() {
    return this.contactForm.get('Message');
  }

  // send the form
  OnSend() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  ngOnInit() {
    this.wallpaper();
    this.createFormGroup();
  }

}
// =================================================================
// i've done creating a validators to email and to all form input 