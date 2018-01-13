import { TestBed, inject } from '@angular/core/testing';

import { CoreLocalStorageService } from './core-local-storage.service';

describe('CoreLocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreLocalStorageService]
    });
  });

  it('should be created', inject([CoreLocalStorageService], (service: CoreLocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
