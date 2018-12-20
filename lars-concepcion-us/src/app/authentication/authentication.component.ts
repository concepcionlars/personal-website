import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {

  profile = "assets/m.jpg";
  wallpaper = 'assets/c.png';
  AuthForm: FormGroup;

  constructor() {
    this.AuthForm = this.createAuthGroup();
   }

  createAuthGroup() {
    return new FormGroup({
      Username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('^[.-_a-zA-Z0-9]*$')]),
      Password: new FormControl('', [Validators.required, Validators.minLength(5), ])
    })
  }

  get username() {
    return this.AuthForm.get('Username');
  }

  get password() {
    return this.AuthForm.get('Password');
  }

  ngOnInit() {
    this.createAuthGroup();
  }

}
