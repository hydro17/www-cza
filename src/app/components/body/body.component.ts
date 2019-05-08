import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'cza-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  private menuVisibility: string = 'none';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 620) {
      this.menuVisibility = 'none';
    } else {
      this.menuVisibility = 'block';
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
    this.menuVisibility = visibility;
  }
}
