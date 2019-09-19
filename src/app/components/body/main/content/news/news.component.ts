import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as myGlobals from 'src/app/globals';

@Component({
  selector: 'cza-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild('gallerySelectedImageContainer', { static: false }) gallerySelectedImageContainer: ElementRef;

  constructor() { }
  ngOnInit() { }

  @HostListener('window:keyup.escape', ['$event'])
  onKeyUp() {
    this.gallerySelectedImageContainer.nativeElement.classList.add('hidden');
  }

  showSelectedGalleryImage(e, gallerySelectedImageContainer) {
    // tslint:disable-next-line:curly
    if (e.target.nodeName !== 'IMG') return;

    gallerySelectedImageContainer.querySelector('div').style.maxWidth = `${window.innerWidth * 0.9}px`;

    gallerySelectedImageContainer.querySelector('div').innerHTML = `
      <img src="${e.target.getAttribute('data-big-img-src')}" style="width:100%" alt="gallery-krasnobrod-selected-image">
      `;

    gallerySelectedImageContainer.classList.remove('hidden');
  }

  hide(domElement) {
    domElement.classList.add('hidden');
  }
}
