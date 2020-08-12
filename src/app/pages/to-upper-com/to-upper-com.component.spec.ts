import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToUpperComComponent } from './to-upper-com.component';

describe('ToUpperComComponent', () => {
  let component: ToUpperComComponent;
  let fixture: ComponentFixture<ToUpperComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToUpperComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToUpperComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
