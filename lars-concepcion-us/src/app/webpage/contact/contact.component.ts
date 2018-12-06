import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

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
