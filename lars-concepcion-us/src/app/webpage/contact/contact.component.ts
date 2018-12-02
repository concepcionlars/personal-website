import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor() { }

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

  }

}
