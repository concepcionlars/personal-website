import { Component, OnInit, NgZone } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { HeadersEditorComponent } from '../../admin/user_interface/headers-editor/headers-editor.component';
import { trigger, transition, style, animate } from '@angular/animations';

import { HeadersEditorService } from '../../admin/user_interface/headers-editor/headers-editor.service';
import { TimelineService } from '../../client/timeline/timeline.service';
import { profileSchema } from '../../customTSFIle/profileSchema';
import { fade } from '../../animationsDir/fade';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    fade
  ]
})
export class HeaderComponent implements OnInit {

  profileSchema: Object;

  constructor(
    private headersEditorService: HeadersEditorService,
    private detectChange: NgZone, 
    private timelineService: TimelineService, 
    private dialog: MatDialog
    ) { }
  //this is the parent component
  //when the user click the edit the dialog component will open
  //NOTE:: while in the dialog the input will be displayed
  showDialog() {
    const dialogRef = this.dialog.open(HeadersEditorComponent, {
      panelClass: 'profile-editor'
    })

    dialogRef.afterClosed().subscribe(data => {
      this.profileSchema = data
      console.log(this.profileSchema)
    })
  };

  //data recieve from the server and bind to component
  prof : profileSchema;

  get() {
    this.timelineService.getData().subscribe((data: profileSchema) => this.detectChange.run(() => {
      this.prof = data
    }));
    this.detectChange
  }

  ngOnInit() {
    this.get()
  }

}
