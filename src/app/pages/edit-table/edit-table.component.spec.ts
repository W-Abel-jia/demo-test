import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditTableComponent } from './edit-table.component';

describe('EditTableComponent', () => {
  let component: EditTableComponent;
  let fixture: ComponentFixture<EditTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
