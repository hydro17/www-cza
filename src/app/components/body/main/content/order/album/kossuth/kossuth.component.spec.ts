import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KossuthComponent } from './kossuth.component';

describe('KossuthComponent', () => {
  let component: KossuthComponent;
  let fixture: ComponentFixture<KossuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KossuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KossuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
