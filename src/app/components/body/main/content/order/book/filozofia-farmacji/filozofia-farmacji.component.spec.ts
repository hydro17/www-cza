import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilozofiaFarmacjiComponent } from './filozofia-farmacji.component';

describe('FilozofiaFarmacjiComponent', () => {
  let component: FilozofiaFarmacjiComponent;
  let fixture: ComponentFixture<FilozofiaFarmacjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilozofiaFarmacjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilozofiaFarmacjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
