import { Component, OnInit, HostListener } from '@angular/core';

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
  private smallScreenWidth = 710;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= this.smallScreenWidth) {
      this.bigScreen = false;
    } else {
      this.bigScreen = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= this.smallScreenWidth) {
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
