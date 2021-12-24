import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyLoadComComponent } from './lazy-load-com.component';

describe('LazyLoadComComponent', () => {
  let component: LazyLoadComComponent;
  let fixture: ComponentFixture<LazyLoadComComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
