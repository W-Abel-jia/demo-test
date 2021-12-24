import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormNestedComponent } from './form-nested.component';

describe('FormNestedComponent', () => {
  let component: FormNestedComponent;
  let fixture: ComponentFixture<FormNestedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
