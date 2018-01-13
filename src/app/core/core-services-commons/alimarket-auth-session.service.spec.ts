/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlimarketAuthSessionService } from './alimarket-auth-session.service';

describe('AlimarketAuthSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlimarketAuthSessionService]
    });
  });

  it('should ...', inject([AlimarketAuthSessionService], (service: AlimarketAuthSessionService) => {
    expect(service).toBeTruthy();
  }));
});
