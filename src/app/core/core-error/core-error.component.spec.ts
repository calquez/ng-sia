import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreErrorComponent } from './core-error.component';

describe('CoreErrorComponent', () => {
  let component: CoreErrorComponent;
  let fixture: ComponentFixture<CoreErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
