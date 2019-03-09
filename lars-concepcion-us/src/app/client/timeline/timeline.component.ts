import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [

    trigger('fade', [

      state('void', style({ opacity: 0})),

      transition('void <=> *', [
        animate(600)
      ]),

    ]),

  ]
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
