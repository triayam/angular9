import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CallbackInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    
    if (request.url.indexOf('paytmdone') > -1) {
        let params = request.params.get('paytmParams');
         const varObj = JSON.parse(params);
         console.log('varObj ' + JSON.stringify(varObj));
         const loginApiResponce = {
          name: 'fadf' ,
          uid: Math.floor(Math.random()*(20-3+1)+3) % 10,
          token: '2323523523DFSWERWERWER'
        };
         sessionStorage.setItem('userData', JSON.stringify(varObj));
        
        return next.handle(request);
    }
  }
}
