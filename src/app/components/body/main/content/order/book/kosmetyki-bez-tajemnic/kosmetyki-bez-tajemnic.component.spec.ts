import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosmetykiBezTajemnicComponent } from './kosmetyki-bez-tajemnic.component';

describe('KosmetykiBezTajemnicComponent', () => {
  let component: KosmetykiBezTajemnicComponent;
  let fixture: ComponentFixture<KosmetykiBezTajemnicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosmetykiBezTajemnicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosmetykiBezTajemnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
