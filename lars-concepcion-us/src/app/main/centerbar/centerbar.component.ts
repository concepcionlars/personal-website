import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { AddBlogPostComponent } from 'src/app/admin/user_interface/add-blog-post/add-blog-post.component';
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
  
  constructor(private dialog: MatDialog) { }

  showDialogBox() {
    const dialogRef = this.dialog.open(AddBlogPostComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'add-blog-post'
    })
  }

  ngOnInit() {
  }

}
