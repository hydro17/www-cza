import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamborComponent } from './jambor.component';

describe('JamborComponent', () => {
  let component: JamborComponent;
  let fixture: ComponentFixture<JamborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
