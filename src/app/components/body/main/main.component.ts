import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, group, sequence, stagger } from '@angular/animations';

@Component({
  selector: 'cza-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ position: 'relative', minHeight: 'calc(100vh - 200px)' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        sequence([
          query(':enter', [
            style({ opacity: 0 }),
          ], { optional: true }),

          query(':leave', [
            animate('0.3s', style({ opacity: 0 }))
          ], { optional: true }),

          query(':enter', [
            animate('0.3s', style({ opacity: 1 }))
          ], { optional: true }),

          query(':self', [
            style({ minHeight: 0 })
          ])
        ])
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.name;
  }
}
