import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HeadersEditorComponent } from '../../webpage/webEditor/headers-editor/headers-editor.component';
import { trigger, transition, style, animate } from '@angular/animations';

import { fade } from '../../animationsDir/fade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    fade
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  showDialog():void {
    const dialogRef = this.dialog.open(HeadersEditorComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'profile-editor'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

  ngOnInit() {
  }

}
