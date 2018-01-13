import { TestBed, inject } from '@angular/core/testing';

import { CoreServiceLoginService } from './core-service-login.service';

describe('CoreServiceLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreServiceLoginService]
    });
  });

  it('should be created', inject([CoreServiceLoginService], (service: CoreServiceLoginService) => {
    expect(service).toBeTruthy();
  }));
});
