import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { ContactService } from './contact.service';
import { Data } from 'src/app/customTSFIle/contactFormValue';

// //=====================
// // JSON OBJECT
// //=====================
// const filesData = ({
//   metadata: {
//     Fullname: String,
//     Email: String,
//     Subject: String,
//     Message: String
//   }
// })

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup;

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

  //validate form on submit
  public validateWhenSubmit(send) {
    if(!this.contactForm.valid) {
      this.contactForm.controls['Fullname'].markAsTouched();
      this.contactForm.controls['Email'].markAsTouched();
      this.contactForm.controls['Subject'].markAsTouched();
      this.contactForm.controls['Message'].markAsTouched();
    } else {
      send.click();
    }
  }

  // send the form to server and validate
  OnSend(cancel) {
    const metadata: Data = {
      Fullname: this.fullname.value,
      Email: this.email.value,
      Subject: this.subject.value,
      Message: this.message.value,
    }
    this._contactService.sendForm(metadata).subscribe(res => alert('Send Successfully'))
    this.dialogRef.close()
  }

  ngOnInit() {
    this.wallpaper();
    this.createFormGroup();
  }

}