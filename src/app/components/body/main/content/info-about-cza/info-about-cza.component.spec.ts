import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutCzaComponent } from './info-about-cza.component';

describe('InfoAboutCzaComponent', () => {
  let component: InfoAboutCzaComponent;
  let fixture: ComponentFixture<InfoAboutCzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAboutCzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAboutCzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
