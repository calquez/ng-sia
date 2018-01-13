import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularesPanelComponent } from './titulares-panel.component';

describe('TitularesPanelComponent', () => {
  let component: TitularesPanelComponent;
  let fixture: ComponentFixture<TitularesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
