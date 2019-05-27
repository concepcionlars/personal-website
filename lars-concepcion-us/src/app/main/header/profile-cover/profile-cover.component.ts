import { Component, OnInit, Input } from '@angular/core';

import { MainService } from '../../main.service'
import { ProfileImageMetadata } from '../../../customTSFIle/profileImageMetadata';
import { ImageStyleService } from '../../../customTSFIle/image_setter/image-style.service';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.css']
})
export class ProfileCoverComponent implements OnInit {

  constructor(private imageSetter: ImageStyleService, private mainService: MainService,) { }

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

  ngOnInit() {
    this.get()
  }

}
