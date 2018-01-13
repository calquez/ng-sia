import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosLayoutComponent } from './eventos-layout.component';

describe('EventosLayoutComponent', () => {
  let component: EventosLayoutComponent;
  let fixture: ComponentFixture<EventosLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
