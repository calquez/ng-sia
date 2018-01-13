import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosNavbarComponent } from './eventos-navbar.component';

describe('EventosNavbarComponent', () => {
  let component: EventosNavbarComponent;
  let fixture: ComponentFixture<EventosNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
