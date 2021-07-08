import { TestBed } from '@angular/core/testing';

import { TestLib3Service } from './test-lib3.service';

describe('TestLib3Service', () => {
  let service: TestLib3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLib3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
