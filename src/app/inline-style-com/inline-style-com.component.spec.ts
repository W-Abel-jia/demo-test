import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleComComponent } from './inline-style-com.component';

describe('InlineStyleComComponent', () => {
  let component: InlineStyleComComponent;
  let fixture: ComponentFixture<InlineStyleComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineStyleComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStyleComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
