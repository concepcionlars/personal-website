import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { TimelineService } from './timeline.service';

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

  schema: Object = {};

  constructor(private timelineService: TimelineService) { }

  get() {
    this.timelineService.getData().subscribe(res => this.schema = res);
  }

  ngOnInit() {
    this.get()
  }

}
