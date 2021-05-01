import { TestBed } from '@angular/core/testing';

import { EpmsService } from './epms.service';

describe('EpmsService', () => {
  let service: EpmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
