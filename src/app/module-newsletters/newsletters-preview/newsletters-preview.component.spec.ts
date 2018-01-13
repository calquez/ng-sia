import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterPreviewComponent } from './newsletters-preview.component';

describe('NewsletterPreviewComponent', () => {
  let component: NewsletterPreviewComponent;
  let fixture: ComponentFixture<NewsletterPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
