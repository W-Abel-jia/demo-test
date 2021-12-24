import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoSiderComponent } from './demo-sider.component';

describe('DemoSiderComponent', () => {
  let component: DemoSiderComponent;
  let fixture: ComponentFixture<DemoSiderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
