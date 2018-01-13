import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularesHeaderComponent } from './titulares-header.component';

describe('TitularesHeaderComponent', () => {
  let component: TitularesHeaderComponent;
  let fixture: ComponentFixture<TitularesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
