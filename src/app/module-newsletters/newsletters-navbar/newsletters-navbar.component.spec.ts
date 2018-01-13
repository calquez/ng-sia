import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterNavbarComponent } from './newsletters-navbar.component';

describe('NewsletterNavbarComponent', () => {
  let component: NewsletterNavbarComponent;
  let fixture: ComponentFixture<NewsletterNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
