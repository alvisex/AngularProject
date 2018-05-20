import { TestBed, inject } from '@angular/core/testing';

import { ServiciodbbService } from './serviciodbb.service';

describe('ServiciodbbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciodbbService]
    });
  });

  it('should be created', inject([ServiciodbbService], (service: ServiciodbbService) => {
    expect(service).toBeTruthy();
  }));
});
