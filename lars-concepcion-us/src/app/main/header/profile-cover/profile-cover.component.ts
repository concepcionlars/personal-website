import { Component, OnInit, Input, Renderer2 } from '@angular/core';

import { ProfileCoverService } from './profile-cover.service';
import { MainService } from '../../main.service';
import { ProfileImageMetadata } from '../../../customTSFIle/profileImageMetadata';
import { ImageStyleService } from '../../../customTSFIle/image_setter/image-style.service';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.css']
})
export class ProfileCoverComponent implements OnInit {

  constructor(
    private imageSetter: ImageStyleService, 
    private mainService: MainService,
    private thisService: ProfileCoverService,
    private renderer : Renderer2) { }

  @Input() ngStyle : string;

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

  updateProfile() {
    const element = document.getElementsByClassName('profile');
    const elementor = 'profilePhoto';
    this.thisService.update(element, this.renderer, elementor);
  }

  updateCover() {
    const element = document.getElementsByClassName('wallpaper');
    const elementor = 'coverPhoto';
    this.thisService.update(element, this.renderer, elementor);
  }

  updateLogo() {
    const element = document.getElementsByClassName('logo');
    const elementor = 'logo';
    this.thisService.update(element, this.renderer, elementor);
  }

  ngOnInit() {
    this.get()
  }

}
