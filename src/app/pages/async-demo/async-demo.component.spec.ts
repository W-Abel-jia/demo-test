import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AsyncDemoComponent } from './async-demo.component';

describe('AsyncDemoComponent', () => {
  let component: AsyncDemoComponent;
  let fixture: ComponentFixture<AsyncDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
