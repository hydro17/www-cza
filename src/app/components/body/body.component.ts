import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'cza-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  private menuVisibility: string;
  private sidebarVisibility: string;

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

  showMenu() {
    if (this.menuVisibility === 'none') {
      this.menuVisibility = 'block';
    } else {
      this.menuVisibility = 'none';
    }
  }

  onClickInsideMenu(visibility) {
    this.menuVisibility = 'none';
    this.sidebarVisibility = 'none';
  }

  showSidebar() {
    if (this.sidebarVisibility === 'none') {
      this.sidebarVisibility = 'block';
    } else {
      this.sidebarVisibility = 'none';
    }
  }

  onClickInsideSidebar(visibility) {
    this.sidebarVisibility = 'none';
    this.menuVisibility = 'none';
  }
}
