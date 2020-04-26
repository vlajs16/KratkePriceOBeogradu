/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PricaService } from './prica.service';

describe('Service: Prica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricaService]
    });
  });

  it('should ...', inject([PricaService], (service: PricaService) => {
    expect(service).toBeTruthy();
  }));
});
