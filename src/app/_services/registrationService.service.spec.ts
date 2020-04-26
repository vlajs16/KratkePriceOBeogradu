/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistrationServiceService } from './registrationService.service';

describe('Service: RegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationServiceService]
    });
  });

  it('should ...', inject([RegistrationServiceService], (service: RegistrationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
