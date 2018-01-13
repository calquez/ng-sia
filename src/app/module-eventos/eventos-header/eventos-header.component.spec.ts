import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosHeaderComponent } from './eventos-header.component';

describe('EventosHeaderComponent', () => {
  let component: EventosHeaderComponent;
  let fixture: ComponentFixture<EventosHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
