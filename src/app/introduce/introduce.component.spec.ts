import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroduceComponent } from './introduce.component';

describe('IntroduceComponent', () => {
  let component: IntroduceComponent;
  let fixture: ComponentFixture<IntroduceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
