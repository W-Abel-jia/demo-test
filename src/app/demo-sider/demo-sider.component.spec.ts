import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSiderComponent } from './demo-sider.component';

describe('DemoSiderComponent', () => {
  let component: DemoSiderComponent;
  let fixture: ComponentFixture<DemoSiderComponent>;

  beforeEach(async(() => {
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
