import { Component, OnInit } from '@angular/core';

import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent implements OnInit {

  profile = 'assets/m.jpg';
  image = "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&h=350";

  constructor(private alertBox: AlertBoxService) { }

  openAlertBox() {
    this.alertBox.showAlertBox();
  }


  ngOnInit() {
  }

}
