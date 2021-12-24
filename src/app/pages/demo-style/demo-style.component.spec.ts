import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoStyleComponent } from './demo-style.component';

describe('DemoStyleComponent', () => {
  let component: DemoStyleComponent;
  let fixture: ComponentFixture<DemoStyleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
