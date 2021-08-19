import { Route } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { IndexComponent } from './index.component';
import { PayTmTestComponent } from '../components/checkout/thridparty/test/pay-tm-test/pay-tm-test.component';
export const IndexRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../index/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('../index/signup/signup.module').then(m => m.SignupModule)
      },
      {
        path: 'forgot',
        loadChildren: () =>
          import('../index/forgot/forgot.module').then(m => m.ForgotModule)
      },
	 
      {
        path: 'system-error',
        loadChildren: () =>
          import('../index/system-error/system-error.module').then(
            m => m.SystemErrorModule
          )
      }
    ]
  },
   {
      path: 'thirdparty/paytmtest',
      pathMatch : 'full',
       component: PayTmTestComponent 
      
    },
  
];

/* 
 {
        path: 'shipproducts',
        loadChildren: () =>
          import('../components/products/publicproducts.module').then(m => m.PublicproductsModule)
      },
*/
