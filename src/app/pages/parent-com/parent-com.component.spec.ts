import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentComComponent } from './parent-com.component';

describe('ParentComComponent', () => {
  let component: ParentComComponent;
  let fixture: ComponentFixture<ParentComComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
