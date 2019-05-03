import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlownikJakosciZyciaComponent } from './slownik-jakosci-zycia.component';

describe('SlownikJakosciZyciaComponent', () => {
  let component: SlownikJakosciZyciaComponent;
  let fixture: ComponentFixture<SlownikJakosciZyciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlownikJakosciZyciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlownikJakosciZyciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
