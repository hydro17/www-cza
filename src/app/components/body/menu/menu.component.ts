import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cza-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private menuVisibility: string = 'block';

  constructor() { }

  ngOnInit() {
  }

  // menu disappear if window size <= 620px and clicked menu element
  hideMenu() {
    if (window.innerWidth <= 620) { this.menuVisibility = 'none'; }
  }
}
