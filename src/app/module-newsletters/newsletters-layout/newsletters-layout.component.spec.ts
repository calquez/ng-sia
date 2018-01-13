import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterLayoutComponent } from './newsletters-layout.component';

describe('NewsletterLayoutComponent', () => {
  let component: NewsletterLayoutComponent;
  let fixture: ComponentFixture<NewsletterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
