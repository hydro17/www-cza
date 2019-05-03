import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlykComponent } from './slyk.component';

describe('SlykComponent', () => {
  let component: SlykComponent;
  let fixture: ComponentFixture<SlykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
