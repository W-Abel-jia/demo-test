import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StyleDemoComponent } from './style-demo.component';

describe('StyleDemoComponent', () => {
  let component: StyleDemoComponent;
  let fixture: ComponentFixture<StyleDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
