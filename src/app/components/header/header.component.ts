import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'cza-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('true <=> false', [
        animate(1000)
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isAdShown = true;

  constructor() { }

  ngOnInit() {
  }

  changeAd() {
    this.isAdShown = !this.isAdShown;
  }
}
