import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { trigger, transition, query, style, animate, sequence } from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cza-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ position: 'relative', minHeight: '100vh' }),
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
  @ViewChild('routerOutlet') routerOutlet: ElementRef;

  constructor(public router: Router) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe(() => {
      const viewInsertedByRouter = this.routerOutlet.nativeElement.nextElementSibling;
      const domObjectsWithText = viewInsertedByRouter.querySelectorAll('p, figcaption, h1, h2, h3, h4');
      domObjectsWithText.forEach(this.removeTrailingConjunctions);
    });
  }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.name;
  }

  private removeTrailingConjunctions(domObject): void {
    const htmlWithNonBreakingSpaces = domObject.innerHTML
      .replace(/ [a-zA-Z] /g, (m) => m.match(/ [a-zA-Z]/) + '&nbsp')
      .replace(/\d r. /g, (m) => m.match(/\d/) + '&nbsp;r. ');
    domObject.innerHTML = htmlWithNonBreakingSpaces;
  }
}
