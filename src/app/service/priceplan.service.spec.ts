import { TestBed, inject } from '@angular/core/testing';

import { PriceplanService } from './priceplan.service';

describe('PriceplanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceplanService]
    });
  });

  it('should be created', inject([PriceplanService], (service: PriceplanService) => {
    expect(service).toBeTruthy();
  }));
});
