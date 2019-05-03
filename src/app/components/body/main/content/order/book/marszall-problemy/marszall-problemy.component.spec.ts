import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarszallProblemyComponent } from './marszall-problemy.component';

describe('MarszallProblemyComponent', () => {
  let component: MarszallProblemyComponent;
  let fixture: ComponentFixture<MarszallProblemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarszallProblemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarszallProblemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
