import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRightComponent } from './contact-right.component';

describe('ContactRightComponent', () => {
  let component: ContactRightComponent;
  let fixture: ComponentFixture<ContactRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
