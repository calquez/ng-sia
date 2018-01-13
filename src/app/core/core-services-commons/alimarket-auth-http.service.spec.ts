/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlimarketAuthHttpService } from './alimarket-auth-http.service';

describe('AlimarketAuthHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlimarketAuthHttpService]
    });
  });

  it('should ...', inject([AlimarketAuthHttpService], (service: AlimarketAuthHttpService) => {
    expect(service).toBeTruthy();
  }));
});
