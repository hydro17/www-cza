import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarszallPolstalychComponent } from './marszall-polstalych.component';

describe('MarszallPolstalychComponent', () => {
  let component: MarszallPolstalychComponent;
  let fixture: ComponentFixture<MarszallPolstalychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarszallPolstalychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarszallPolstalychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
