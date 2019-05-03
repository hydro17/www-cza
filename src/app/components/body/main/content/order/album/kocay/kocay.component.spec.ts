import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KocayComponent } from './kocay.component';

describe('KocayComponent', () => {
  let component: KocayComponent;
  let fixture: ComponentFixture<KocayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KocayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KocayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
