import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material';

//========================================================
//========= INJECTED CUSTOMIZE ANIMATIONS FILES ==========
//========================================================
import { fade } from '../../animationsDir/fade';
//========================================================
//========= INJECTED CUSTOMIZE TYPESCRIPT FILES ==========
//========================================================
import { profileSchema } from '../../customTSFIle/profileSchema';
import { ImageFileSchema } from '../../customTSFIle/imageFIleSchema';
//========================================================
//=================== INJECTED SERVICE ===================
//========================================================
import { TimelineService } from '../../client/timeline/timeline.service';
import { LeftSidebarService } from './left-sidebar.service';



@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  animations: [
    fade
  ]
})
export class LeftSidebarComponent implements OnInit {

  constructor(
    public renderer: Renderer2,
    private matdialog: MatDialog,
    private timelineService : TimelineService,
    private leftSidebarService: LeftSidebarService
    ) { }

    @Input() function: string;

  //=================================================================
  //============ DISPLAY ALL UPLAODED IMAGE IN DATABASE =============
  //=================================================================
  metadata: ImageFileSchema;

  getImage() {
    this.leftSidebarService.getImageFile().subscribe((data: ImageFileSchema) => this.metadata = data)
  }
  //=================================================================
  //============= DISPLAY SAVED DATA IN PROFILE SCHEMA ==============
  //=================================================================
  introduction : String;
  x ;

  get() {
    this.timelineService.getData().subscribe((data: profileSchema) => this.introduction = data.introduction);
  }

  updateIntroduction() {
    var parentNode : HTMLElement = document.getElementById('intro') as HTMLElement;
    var oldElement = document.getElementsByClassName('introduction');
    for(var i = 1; i < oldElement.length; i++) {
      this.x = i;
    }
    this.leftSidebarService.changeIntroduction(parentNode, oldElement[this.x], this.renderer)
  }

  ngOnInit() {
    this.get();
    this.getImage();
  }

}
