import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddAboutComponent } from 'src/app/admin/user_interface/add-about/add-about.component';
import { AddAboutService } from 'src/app/admin/user_interface/add-about/add-about.service';
import { fade } from '../../animationsDir/fade';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    fade
  ]
})
export class AboutComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  image5 = 'https://cdn.pixabay.com/photo/2018/07/13/23/03/planning-3536758__340.jpg';
  image4 = 'https://cdn.pixabay.com/photo/2017/01/11/15/30/busy-1972091__340.jpg';

  openDialogBox() {
    const dialogRef = this.dialog.open(AddAboutComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'Add-About'
    })
  }

  ngOnInit() {
  }

}
