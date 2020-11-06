import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyClipboardComponent } from './copy-clipboard.component';

describe('CopyClipboardComponent', () => {
  let component: CopyClipboardComponent;
  let fixture: ComponentFixture<CopyClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyClipboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
