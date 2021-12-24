import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CopyToClipboardComponent } from './copy-to-clipboard.component';

describe('CopyToClipboardComponent', () => {
  let component: CopyToClipboardComponent;
  let fixture: ComponentFixture<CopyToClipboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyToClipboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyToClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
