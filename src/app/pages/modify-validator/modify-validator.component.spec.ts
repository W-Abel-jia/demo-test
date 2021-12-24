import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifyValidatorComponent } from './modify-validator.component';

describe('ModifyValidatorComponent', () => {
  let component: ModifyValidatorComponent;
  let fixture: ComponentFixture<ModifyValidatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
