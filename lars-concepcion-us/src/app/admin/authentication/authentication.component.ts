import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';

import { AuthenticateService } from './authenticate.service';
import { AuthData } from 'src/app/customTSFIle/AuthData';
import { MainService } from '../../main/main.service'
import { ProfileImageMetadata } from '../../customTSFIle/profileImageMetadata';
import { ImageStyleService } from '../../customTSFIle/image_setter/image-style.service';

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

  AuthForm: FormGroup;

  constructor(
    private imageSetter: ImageStyleService, 
    private mainService: MainService,
    private _authenticate: AuthenticateService
    ) 
    {
      this.AuthForm = this.createAuthGroup();
   }

  //  profile and cover
   metadata : ProfileImageMetadata;

   get() {
     this.mainService.getHeaderImage().subscribe((data: ProfileImageMetadata) => this.metadata = data);
   };
 
   //set the zoom and rotation of an element dynamically
   markOne(value: number) {
     return this.imageSetter.rotationStyle(value);
   }
   
   markTwo(value: number) {
     return this.imageSetter.zoomStyle(value);
   }

   //Form 
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
    this.get();
    this.createAuthGroup();
  }

}
