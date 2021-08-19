
import { Route } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CheckOutComponent} from './checkout.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';
import { CheckoutSummaryModule } from './checkout-summary/checkout-summary.module';
import { PayTmTestComponent } from './thridparty/test/pay-tm-test/pay-tm-test.component';
// import { MerchantsModule } from './merchants/merchants.module';
export const CheckoutRoutes: Route[] = [
  {
    path: 'summary',
    pathMatch : 'full',
    component: CheckOutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '2',
        loadChildren: () =>
          import('./checkout-summary/checkout-summary.module').then(
            m => m.CheckoutSummaryModule
          )
      },
     /* {
        path: '3',
        
        loadChildren: () =>
          import('./merchant-summary/merchants-summary.module').then(
            m => m.MerchantSummaryModule
          )
      }
      */
    ]
  } 
 /* {
    path: 'paytmtest',
    pathMatch : 'full',
    component: PayTmTestComponent
    //canActivate: [AuthGuard],
  }
  */
  
];
