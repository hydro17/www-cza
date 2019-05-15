import { Component, OnInit, HostListener } from '@angular/core';
import * as myGlobals from '../../globals';

@Component({
  selector: 'cza-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  smallScreenMenuDisplay: string = 'none';
  // tslint:disable-next-line:no-inferrable-types
  smallScreenSidebarDisplay: string = 'none';
  bigScreen: boolean;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < myGlobals.smallScreenWidth) {
      this.bigScreen = false;
    } else {
      this.bigScreen = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < myGlobals.smallScreenWidth) {
      this.bigScreen = false;
    } else {
      this.bigScreen = true;
    }
  }

  toggleMenu() {
    if (this.smallScreenMenuDisplay === 'none') {
      this.smallScreenMenuDisplay = 'block';
    } else {
      this.smallScreenMenuDisplay = 'none';
    }
  }

  toggleSidebar() {
    if (this.smallScreenSidebarDisplay === 'none') {
      this.smallScreenSidebarDisplay = 'block';
    } else {
      this.smallScreenSidebarDisplay = 'none';
    }
  }

  hideMenuAndSidebar() {
    this.smallScreenMenuDisplay = this.smallScreenSidebarDisplay = 'none';
  }
}
