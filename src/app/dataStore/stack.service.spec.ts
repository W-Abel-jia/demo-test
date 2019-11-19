import { TestBed } from '@angular/core/testing';

import { StackService } from './stack.service';

describe('StackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StackService = TestBed.get(StackService);
    expect(service).toBeTruthy();
  });
});
