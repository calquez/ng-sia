import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterPanelComponent } from './newsletters-panel.component';

describe('NewsletterPanelComponent', () => {
  let component: NewsletterPanelComponent;
  let fixture: ComponentFixture<NewsletterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
