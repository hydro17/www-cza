import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkulskiComponent } from './skulski.component';

describe('SkulskiComponent', () => {
  let component: SkulskiComponent;
  let fixture: ComponentFixture<SkulskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkulskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkulskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
