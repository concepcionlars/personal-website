import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centerbar',
  templateUrl: './centerbar.component.html',
  styleUrls: ['./centerbar.component.css']
})
export class CenterbarComponent implements OnInit {

  profile = 'assets/m.jpg';
  image = "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&h=350";
  constructor() { }

  ngOnInit() {
  }

}
