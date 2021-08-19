import { TestBed } from '@angular/core/testing';

import { GooglepayService } from './googlepay.service';

describe('GooglepayService', () => {
  let service: GooglepayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglepayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
