import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SluggishnessTreeTableComponent } from './sluggishness-tree-table.component';

describe('SluggishnessTreeTableComponent', () => {
  let component: SluggishnessTreeTableComponent;
  let fixture: ComponentFixture<SluggishnessTreeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SluggishnessTreeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SluggishnessTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
