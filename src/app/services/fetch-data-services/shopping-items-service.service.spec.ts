import { TestBed } from '@angular/core/testing';

import { ShoppingItemsServiceService } from './shopping-items-service.service';

describe('ShoppingItemsServiceService', () => {
  let service: ShoppingItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
