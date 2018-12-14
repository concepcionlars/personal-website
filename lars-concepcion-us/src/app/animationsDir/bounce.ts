import { trigger, transition, style, animate, animation, group, animateChild, query } from '@angular/animations';

export const bounce = trigger('bounce', [
    transition('void <=> *', [
        style({height: 0}),
        animate(300, style({height: 500}))
    ])
])