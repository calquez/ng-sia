/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlimarketAuthLocalStorageService } from './alimarket-auth-local-storage.service';

describe('AlimarketAuthLocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlimarketAuthLocalStorageService]
    });
  });

  it('should ...', inject([AlimarketAuthLocalStorageService], (service: AlimarketAuthLocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
