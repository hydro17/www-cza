import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarszallPlynnychComponent } from './marszall-plynnych.component';

describe('MarszallPlynnychComponent', () => {
  let component: MarszallPlynnychComponent;
  let fixture: ComponentFixture<MarszallPlynnychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarszallPlynnychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarszallPlynnychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
