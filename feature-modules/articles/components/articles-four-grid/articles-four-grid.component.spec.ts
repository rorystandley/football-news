import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFourGridComponent } from './articles-four-grid.component';

describe('ArticlesFourGridComponent', () => {
  let component: ArticlesFourGridComponent;
  let fixture: ComponentFixture<ArticlesFourGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFourGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFourGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
