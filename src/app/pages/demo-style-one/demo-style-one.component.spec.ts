import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoStyleOneComponent } from './demo-style-one.component';

describe('DemoStyleOneComponent', () => {
  let component: DemoStyleOneComponent;
  let fixture: ComponentFixture<DemoStyleOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStyleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStyleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
