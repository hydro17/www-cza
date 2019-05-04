import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualTablesOfContentsComponent } from './annual-tables-of-contents.component';

describe('AnnualTablesOfContentsComponent', () => {
  let component: AnnualTablesOfContentsComponent;
  let fixture: ComponentFixture<AnnualTablesOfContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualTablesOfContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualTablesOfContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
