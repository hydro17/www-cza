import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperAdvertisementComponent } from './upper-advertisement.component';

describe('UpperAdvertisementComponent', () => {
  let component: UpperAdvertisementComponent;
  let fixture: ComponentFixture<UpperAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
