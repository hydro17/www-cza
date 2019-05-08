import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cza-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() menuVisibility = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // menu disappear if window size <= 620px and clicked menu element
  hideMenu() {
    if (window.innerWidth <= 620) {
      this.menuVisibility.emit('none');
    }
  }
}
