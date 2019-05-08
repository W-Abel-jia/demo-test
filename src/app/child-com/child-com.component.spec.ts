import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComComponent } from './child-com.component';

describe('ChildComComponent', () => {
  let component: ChildComComponent;
  let fixture: ComponentFixture<ChildComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
