import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'cza-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // @ViewChild('gallerySelectionContainer') gallerySelectionContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event) {
  //   this.gallerySelectionContainer.nativeElement.classList.add('hidden');
  // }

  showSelected(e, gallerySelectionContainer) {
    // const selectionFrame = this.gallerySelectionFrame.nativeElement;
    // const selectionFrame = this.gallerySelectionContainer.nativeElement;
    // this.gallerySelectionContainer.nativeElement.innerHTML = e.target;
    // selectionFrame.appendChild(e.target);

    // this.gallerySelectionContainer.nativeElement.querySelector('div').innerHTML = `
    // <img src="${e.target.getAttribute('data-big-img-src')}" alt="gallery-krasnobrod-selected-image">
    // `;
    // this.gallerySelectionContainer.nativeElement.classList.remove('hidden');

    gallerySelectionContainer.querySelector('div').innerHTML = `
    <img src="${e.target.getAttribute('data-big-img-src')}" alt="gallery-krasnobrod-selected-image">
    `;
    gallerySelectionContainer.classList.remove('hidden');

    // this.gallerySelectionContainer.nativeElement.querySeletor('div').classList.remove('hidden');

    // selectionFrame.innerHTML = '<img src="/assets/images/galleries/kras?nobrod/krasnob-dsc0451-300px.jpg" alt="gallery-krasnobrod-1">';
    // selectionFrame.classList.remove('hidden');
  }

  hide(domElement) {
    domElement.classList.add('hidden');
  }
}
