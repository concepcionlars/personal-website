import { Component, OnInit } from '@angular/core';

import { fade } from '../../animationsDir/fade';

@Component({
  selector: 'app-centerbar',
  templateUrl: './centerbar.component.html',
  styleUrls: ['./centerbar.component.css'],
  animations: [
    fade
  ]
})
export class CenterbarComponent implements OnInit {

  profile = 'assets/m.jpg';
  image = "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&h=350";
  constructor() { }

  ngOnInit() {
  }

}
