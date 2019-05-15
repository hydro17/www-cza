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
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        sequence([
          query(':enter', [
            style({ opacity: 0 }),
          ], { optional: true }),

          query(':leave', [
            animate('0.2s', style({ opacity: 0 }))
          ], { optional: true }),

          query(':enter', [
            animate('0.2s', style({ opacity: 1 }))
          ], { optional: true })
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

  // showNextArticle(e) {
  //   const nextElementSibling = e.target.nextElementSibling;
  //   console.log(nextElementSibling.nodeName);

  //   if (nextElementSibling.getAttribute('class') === null) { return; }
  //   if (nextElementSibling.getAttribute('class').match(/hidden/g) === null) { return; }

  //   nextElementSibling.addEventListener('animationend', this.showNextArticle);
  //   nextElementSibling.classList.remove('hidden');
  //   nextElementSibling.classList.add('show');
  // }
}
