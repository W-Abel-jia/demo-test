import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingDOMComponent } from './operating-dom.component';

describe('OperatingDOMComponent', () => {
  let component: OperatingDOMComponent;
  let fixture: ComponentFixture<OperatingDOMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingDOMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingDOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
