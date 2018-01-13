import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularesPreviewComponent } from './titulares-preview.component';

describe('TitularesPreviewComponent', () => {
  let component: TitularesPreviewComponent;
  let fixture: ComponentFixture<TitularesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
