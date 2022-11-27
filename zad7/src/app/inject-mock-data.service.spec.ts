import { TestBed } from '@angular/core/testing';

import { InjectMockDataService } from './inject-mock-data.service';

describe('InjectMockDataService', () => {
  let service: InjectMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
