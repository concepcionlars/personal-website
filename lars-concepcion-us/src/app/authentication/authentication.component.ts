import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';

import { AuthenticateService } from './authenticate.service';
import { AuthData } from 'src/app/customTSFIle/AuthData';

//=====================
// JSON OBJECT
//=====================
const value = ({
  data: {
    Username: String,
    Password: String,
  }
})

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {

  profile = "assets/m.jpg";
  wallpaper = 'assets/c.png';
  AuthForm: FormGroup;

  constructor(private _authenticate: AuthenticateService) {
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

  Authenticate() {
    const data: AuthData = {
      Username: this.AuthForm.value.Username,
      Password: this.AuthForm.value.Password,
    }

    this._authenticate.sendAuth(data).subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.createAuthGroup();
  }

}
