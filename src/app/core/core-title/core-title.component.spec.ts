import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTitleComponent } from './core-title.component';

describe('CoreTitleComponent', () => {
  let component: CoreTitleComponent;
  let fixture: ComponentFixture<CoreTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
