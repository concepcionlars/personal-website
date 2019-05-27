import { Component, OnInit, Renderer2, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

import { fade } from '../animationsDir/fade'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    fade
  ]
})

export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
