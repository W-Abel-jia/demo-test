import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryTitleComponent } from './secondary-title.component';

describe('SecondaryTitleComponent', () => {
  let component: SecondaryTitleComponent;
  let fixture: ComponentFixture<SecondaryTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
