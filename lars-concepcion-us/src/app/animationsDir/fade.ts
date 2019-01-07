import { animation, trigger, animateChild, group, transition, animate, style, query } from '@angular/animations';

export const fade = trigger('fade', [
    transition('void <=> *', [
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
    ])
])