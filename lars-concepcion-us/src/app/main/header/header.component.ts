import { Component, OnInit, NgZone } from '@angular/core';

import { ProfileImageMetadata } from '../../customTSFIle/profileImageMetadata';
import { fade } from '../../animationsDir/fade';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    fade
  ]
})

export class HeaderComponent implements OnInit {

  constructor(
    private headerService : HeaderService, 
  ) { };

  model = {
    fullname: {
      firstname: String,
      lastname: String
    },
    headline: String,
    address : {
      country: String,
      zip: Number,
    },
    introduction: String,
    education: Array,
    schoolname: String,
    summary: String,
  };

  parentListener(ev){
    this.model.fullname.firstname = ev.firstname;
    this.model.fullname.lastname = ev.lastname;
    this.model.headline = ev.headline;
    this.model.summary = ev.summary;
  }

  //==================================
  // profile image metadata and getter

  ngOnInit() {}

}
