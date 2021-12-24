import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';

describe('LifecycleHooksComponent', () => {
  let component: LifecycleHooksComponent;
  let fixture: ComponentFixture<LifecycleHooksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
