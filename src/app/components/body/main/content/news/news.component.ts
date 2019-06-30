import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as myGlobals from 'src/app/globals';

@Component({
  selector: 'cza-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild('gallerySelectedImageContainer') gallerySelectedImageContainer: ElementRef;

  constructor() { }
  ngOnInit() { }

  @HostListener('window:keyup.escape', ['$event'])
  onKeyUp() {
    this.gallerySelectedImageContainer.nativeElement.classList.add('hidden');
  }

  showSelectedGalleryImage(e, gallerySelectedImageContainer) {
    // tslint:disable-next-line:curly
    if (e.target.nodeName !== 'IMG') return;

    // const selectionFrame = this.gallerySelectionFrame.nativeElement;
    // const selectionFrame = this.gallerySelectionContainer.nativeElement;
    // this.gallerySelectionContainer.nativeElement.innerHTML = e.target;
    // selectionFrame.appendChild(e.target);

    // this.gallerySelectionContainer.nativeElement.querySelector('div').innerHTML = `
    // <img src="${e.target.getAttribute('data-big-img-src')}" alt="gallery-krasnobrod-selected-image">
    // `;
    // this.gallerySelectionContainer.nativeElement.classList.remove('hidden');

    if (window.innerWidth < myGlobals.smallScreenWidth) {
      gallerySelectedImageContainer.querySelector('div').innerHTML = `
      <img src="${e.target.getAttribute('data-big-img-src')}" style="max-width:300px" alt="gallery-krasnobrod-selected-image">
      `;
    } else {
      gallerySelectedImageContainer.querySelector('div').innerHTML = `
      <img src="${e.target.getAttribute('data-big-img-src')}" alt="gallery-krasnobrod-selected-image">
      `;
    }

    gallerySelectedImageContainer.classList.remove('hidden');

    // this.gallerySelectionContainer.nativeElement.querySeletor('div').classList.remove('hidden');

    // selectionFrame.innerHTML = '<img src="/assets/images/galleries/kras?nobrod/krasnob-dsc0451-300px.jpg" alt="gallery-krasnobrod-1">';
    // selectionFrame.classList.remove('hidden');
  }

  hide(domElement) {
    domElement.classList.add('hidden');
  }
}
