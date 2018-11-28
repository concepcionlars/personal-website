import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  image5 = 'https://cdn.pixabay.com/photo/2018/07/13/23/03/planning-3536758__340.jpg';
  image4 = 'https://cdn.pixabay.com/photo/2017/01/11/15/30/busy-1972091__340.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849820__340.jpg';
  image2 = 'https://cdn.pixabay.com/photo/2015/06/01/09/04/samsung-793043__340.jpg';
  image1 = 'https://cdn.pixabay.com/photo/2018/03/01/09/33/laptop-3190194__340.jpg';
  image = 'https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804__340.jpg';

  constructor() { }

  ngOnInit() {
  }

}
