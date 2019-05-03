import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarasimowiczComponent } from './harasimowicz.component';

describe('HarasimowiczComponent', () => {
  let component: HarasimowiczComponent;
  let fixture: ComponentFixture<HarasimowiczComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarasimowiczComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarasimowiczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
