import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivalMagazinesComponent } from './archival-magazines.component';

describe('ArchivalMagazinesComponent', () => {
  let component: ArchivalMagazinesComponent;
  let fixture: ComponentFixture<ArchivalMagazinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivalMagazinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivalMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
