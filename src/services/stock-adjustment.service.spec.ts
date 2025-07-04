/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockAdjustmentService } from './stock-adjustment.service';

describe('Service: StockAdjustment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockAdjustmentService]
    });
  });

  it('should ...', inject([StockAdjustmentService], (service: StockAdjustmentService) => {
    expect(service).toBeTruthy();
  }));
});
