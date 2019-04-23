import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cza-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showNextArticle(e) {
    const nextElementSibling = e.target.nextElementSibling;

    if (nextElementSibling.getAttribute('class') === null) { return; }
    if (nextElementSibling.getAttribute('class').match(/hide/g) === null) { return; }

    nextElementSibling.addEventListener('animationend', this.showNextArticle);
    nextElementSibling.classList.remove('hide');
    nextElementSibling.classList.add('show');
  }

}
