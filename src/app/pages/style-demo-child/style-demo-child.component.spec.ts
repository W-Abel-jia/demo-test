import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDemoChildComponent } from './style-demo-child.component';

describe('StyleDemoChildComponent', () => {
  let component: StyleDemoChildComponent;
  let fixture: ComponentFixture<StyleDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
