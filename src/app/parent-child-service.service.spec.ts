import { TestBed } from '@angular/core/testing';

import { ParentChildServiceService } from './parent-child-service.service';

describe('ParentChildServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentChildServiceService = TestBed.get(ParentChildServiceService);
    expect(service).toBeTruthy();
  });
});
