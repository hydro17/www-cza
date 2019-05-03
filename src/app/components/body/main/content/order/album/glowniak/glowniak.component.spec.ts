import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowniakComponent } from './glowniak.component';

describe('GlowniakComponent', () => {
  let component: GlowniakComponent;
  let fixture: ComponentFixture<GlowniakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowniakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowniakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
