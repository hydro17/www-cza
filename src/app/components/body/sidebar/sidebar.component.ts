import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as myGlobals from '../../../globals';

@Component({
  selector: 'cza-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() hideSidebar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // sidebar disappear if window size <= 620px and clicked sidebr element
  hideComponentSidebar() {
    if (window.innerWidth <= myGlobals.smallScreenWidth) {
      this.hideSidebar.emit();
    }
  }
}
