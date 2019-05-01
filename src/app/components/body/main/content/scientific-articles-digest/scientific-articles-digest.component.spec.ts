import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificArticlesDigestComponent } from './scientific-articles-digest.component';

describe('ScientificArticlesDigestComponent', () => {
  let component: ScientificArticlesDigestComponent;
  let fixture: ComponentFixture<ScientificArticlesDigestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificArticlesDigestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificArticlesDigestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
