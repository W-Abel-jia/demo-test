import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStyleOneComponent } from './demo-style-one.component';

describe('DemoStyleOneComponent', () => {
  let component: DemoStyleOneComponent;
  let fixture: ComponentFixture<DemoStyleOneComponent>;

  beforeEach(async(() => {
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
