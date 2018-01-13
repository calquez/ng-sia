import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPanelComponent } from './eventos-panel.component';

describe('EventosPanelComponent', () => {
  let component: EventosPanelComponent;
  let fixture: ComponentFixture<EventosPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
