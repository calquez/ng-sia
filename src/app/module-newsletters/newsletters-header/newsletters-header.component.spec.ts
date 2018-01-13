import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterHeaderComponent } from './newsletters-header.component';

describe('NewsletterHeaderComponent', () => {
  let component: NewsletterHeaderComponent;
  let fixture: ComponentFixture<NewsletterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
