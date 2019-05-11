import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'cza-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  menuVisibility: string;
  sidebarVisibility: string;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 620) {

      if (window.sessionStorage.menu !== 'visible') {
        this.menuVisibility = 'none';
      } else {
        this.menuVisibility = 'block';
      }

      if (window.sessionStorage.sidebar !== 'visible') {
        this.sidebarVisibility = 'none';
      } else {
        this.sidebarVisibility = 'block';
      }

    } else {
      this.menuVisibility = this.sidebarVisibility = 'block';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 620) {

      if (window.sessionStorage.menu !== 'visible') {
        this.menuVisibility = 'none';
      } else {
        this.menuVisibility = 'block';
      }

      if (window.sessionStorage.sidebar !== 'visible') {
        this.sidebarVisibility = 'none';
      } else {
        this.sidebarVisibility = 'block';
      }

    } else {
      this.menuVisibility = this.sidebarVisibility = 'block';
    }
  }

  toggleMenu() {
    if (this.menuVisibility === 'none') {
      this.menuVisibility = 'block';
      window.sessionStorage.menu = 'visible';
    } else {
      this.menuVisibility = 'none';
      window.sessionStorage.menu = 'invisible';
    }
  }

  toggleSidebar() {
    if (this.sidebarVisibility === 'none') {
      this.sidebarVisibility = 'block';
      window.sessionStorage.sidebar = 'visible';
    } else {
      this.sidebarVisibility = 'none';
      window.sessionStorage.sidebar = 'invisible';
    }
  }

  hideMenuAndSidebar() {
    this.menuVisibility = 'none';
    this.sidebarVisibility = 'none';
    window.sessionStorage.menu = 'invisible';
    window.sessionStorage.sidebar = 'invisible';
  }
}
