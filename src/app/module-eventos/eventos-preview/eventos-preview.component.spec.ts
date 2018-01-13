import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPreviewComponent } from './eventos-preview.component';

describe('EventosPreviewComponent', () => {
  let component: EventosPreviewComponent;
  let fixture: ComponentFixture<EventosPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
