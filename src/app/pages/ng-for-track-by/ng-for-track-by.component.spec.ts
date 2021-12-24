import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgForTrackByComponent } from './ng-for-track-by.component';

describe('NgForTrackByComponent', () => {
  let component: NgForTrackByComponent;
  let fixture: ComponentFixture<NgForTrackByComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
