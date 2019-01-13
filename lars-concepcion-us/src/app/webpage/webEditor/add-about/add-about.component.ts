import { Component, OnInit } from '@angular/core';

import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';

@Component({
  selector: 'app-add-about',
  templateUrl: './add-about.component.html',
  styleUrls: ['./add-about.component.css']
})
export class AddAboutComponent implements OnInit {

  constructor(private alert: AlertBoxService) { }

  openAlertBox() {
    this.alert.showAlertBox();
  }

  ngOnInit() {
  }

}
