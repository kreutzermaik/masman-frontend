import { TestBed } from '@angular/core/testing';

import { PunitService } from './punit.service';

describe('PunitService', () => {
  let service: PunitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
