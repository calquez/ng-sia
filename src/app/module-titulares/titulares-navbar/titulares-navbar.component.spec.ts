import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularesNavbarComponent } from './titulares-navbar.component';

describe('TitularesNavbarComponent', () => {
  let component: TitularesNavbarComponent;
  let fixture: ComponentFixture<TitularesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
