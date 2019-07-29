import { TestBed } from '@angular/core/testing';

import { DemoNameAsyncValidatorService } from './demo-name-async-validator.service';

describe('DemoNameAsyncValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoNameAsyncValidatorService = TestBed.get(DemoNameAsyncValidatorService);
    expect(service).toBeTruthy();
  });
});
