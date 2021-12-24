import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimationDemoComponent } from './animation-demo.component';

describe('AnimationDemoComponent', () => {
  let component: AnimationDemoComponent;
  let fixture: ComponentFixture<AnimationDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
