import { Component, OnInit } from '@angular/core';

import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit {

  constructor(private alertservice: AlertBoxService) { }

  image5 = 'https://cdn.pixabay.com/photo/2018/07/13/23/03/planning-3536758__340.jpg';

  openAlertBox() {
    this.alertservice.showAlertBox();
  }

  ngOnInit() {
  }

}
