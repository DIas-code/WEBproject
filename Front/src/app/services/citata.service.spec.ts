import { TestBed } from '@angular/core/testing';

import { CitataService } from './citata.service';

describe('CitataService', () => {
  let service: CitataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
