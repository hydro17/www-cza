import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLeftComponent } from './contact-left.component';

describe('ContactLeftComponent', () => {
  let component: ContactLeftComponent;
  let fixture: ComponentFixture<ContactLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
