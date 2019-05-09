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
      this.menuVisibility = 'none';
      this.sidebarVisibility = 'none';
    } else {
      this.menuVisibility = 'block';
      this.sidebarVisibility = 'block';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 620) {
      this.menuVisibility = 'none';
      this.sidebarVisibility = 'none';
    } else {
      this.menuVisibility = 'block';
      this.sidebarVisibility = 'block';
    }
  }

  toggleMenu() {
    if (this.menuVisibility === 'none') {
      this.menuVisibility = 'block';
    } else {
      this.menuVisibility = 'none';
    }
  }

  toggleSidebar() {
    if (this.sidebarVisibility === 'none') {
      this.sidebarVisibility = 'block';
    } else {
      this.sidebarVisibility = 'none';
    }
  }

  onHideMenu() {
    this.menuVisibility = 'none';
    this.sidebarVisibility = 'none';
  }

  onHideSidebar() {
    this.sidebarVisibility = 'none';
    this.menuVisibility = 'none';
  }
}
