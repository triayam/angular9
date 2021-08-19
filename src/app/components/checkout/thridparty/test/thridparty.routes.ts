import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../guards/auth.guard';
import { ThridpartyComponent } from './thridparty.component';
import { PayTmTestComponent } from './pay-tm-test/pay-tm-test.component';

export const ThridPartyRoutes: Routes = [
 /*{
    path: 'options',
    component: MerchantSummaryComponent,
    canActivate: [AuthGuard]
  }*/
  
  {
    path: 'paytmtest',
    component: ThridpartyComponent,
    
    children: [
      {
        path: '2',
        loadChildren: () =>
          import('./pay-tm-test/pay-tm-test.module').then(
            m => m.PayTmTestModule
          )
      }
    ]
  }
];


