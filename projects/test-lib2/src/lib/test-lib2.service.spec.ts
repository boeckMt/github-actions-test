import { TestBed } from '@angular/core/testing';

import { TestLib2Service } from './test-lib2.service';

describe('TestLib2Service', () => {
  let service: TestLib2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLib2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
