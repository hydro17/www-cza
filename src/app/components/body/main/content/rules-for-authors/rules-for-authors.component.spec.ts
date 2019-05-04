import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesForAuthorsComponent } from './rules-for-authors.component';

describe('RulesForAuthorsComponent', () => {
  let component: RulesForAuthorsComponent;
  let fixture: ComponentFixture<RulesForAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesForAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesForAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
