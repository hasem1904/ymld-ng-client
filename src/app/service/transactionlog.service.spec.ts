import { TestBed, inject } from '@angular/core/testing';

import { TransactionlogService } from './transactionlog.service';

describe('TransactionlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionlogService]
    });
  });

  it('should be created', inject([TransactionlogService], (service: TransactionlogService) => {
    expect(service).toBeTruthy();
  }));
});
