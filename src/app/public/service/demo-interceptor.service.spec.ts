import { TestBed } from '@angular/core/testing';

import { DemoInterceptorService } from './demo-interceptor.service';

describe('DemoInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoInterceptorService = TestBed.get(DemoInterceptorService);
    expect(service).toBeTruthy();
  });
});
