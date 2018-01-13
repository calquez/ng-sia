import { TestBed, inject } from '@angular/core/testing';

import { CoreAuthHttpService } from './core-auth-http.service';

describe('CoreAuthHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreAuthHttpService]
    });
  });

  it('should be created', inject([CoreAuthHttpService], (service: CoreAuthHttpService) => {
    expect(service).toBeTruthy();
  }));
});
