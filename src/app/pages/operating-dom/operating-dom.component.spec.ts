import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OperatingDOMComponent } from './operating-dom.component';

describe('OperatingDOMComponent', () => {
  let component: OperatingDOMComponent;
  let fixture: ComponentFixture<OperatingDOMComponent>;

  beforeEach(waitForAsync(() => {
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
