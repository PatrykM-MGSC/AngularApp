import { TestBed } from '@angular/core/testing';

import { TransaltionServiceService } from './transaltion-service.service';

describe('TransaltionServiceService', () => {
  let service: TransaltionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaltionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
