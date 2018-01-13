import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularesLayoutComponent } from './titulares-layout.component';

describe('TitularesLayoutComponent', () => {
  let component: TitularesLayoutComponent;
  let fixture: ComponentFixture<TitularesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
