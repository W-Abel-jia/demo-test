import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComComponent } from './dynamic-com.component';

describe('DynamicComComponent', () => {
  let component: DynamicComComponent;
  let fixture: ComponentFixture<DynamicComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
