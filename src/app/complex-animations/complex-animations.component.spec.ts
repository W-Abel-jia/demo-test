import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexAnimationsComponent } from './complex-animations.component';

describe('ComplexAnimationsComponent', () => {
  let component: ComplexAnimationsComponent;
  let fixture: ComponentFixture<ComplexAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
