import { TestBed } from '@angular/core/testing';

import { CallbackInterceptor } from './callback.interceptor';

describe('CallbackInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CallbackInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CallbackInterceptor = TestBed.inject(CallbackInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
