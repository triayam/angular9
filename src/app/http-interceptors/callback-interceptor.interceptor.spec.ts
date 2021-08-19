import { TestBed } from '@angular/core/testing';

import { CallbackInterceptorInterceptor } from './callback-interceptor.interceptor';

describe('CallbackInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CallbackInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CallbackInterceptorInterceptor = TestBed.inject(CallbackInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
