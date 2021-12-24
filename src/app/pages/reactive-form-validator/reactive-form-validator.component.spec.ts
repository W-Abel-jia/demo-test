import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReactiveFormValidatorComponent } from './reactive-form-validator.component';

describe('ReactiveFormValidatorComponent', () => {
  let component: ReactiveFormValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormValidatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
