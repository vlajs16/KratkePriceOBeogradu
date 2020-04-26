/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PitanjeService } from './pitanje.service';

describe('Service: Pitanje', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitanjeService]
    });
  });

  it('should ...', inject([PitanjeService], (service: PitanjeService) => {
    expect(service).toBeTruthy();
  }));
});
