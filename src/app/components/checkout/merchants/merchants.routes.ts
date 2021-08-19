import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../guards/auth.guard';
import { MerchantsComponent } from './merchants.component';
import { MerchantSummaryComponent } from '../merchant-summary/merchantsummary.component';
import { PatymComponent } from './patym/patym.component';
import { UpiComponent } from './upi/upi.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { CardComponent } from './card/card.component';
export const MerchantsRoutes: Routes = [
 /*{
    path: 'options',
    component: MerchantSummaryComponent,
    canActivate: [AuthGuard]
  }*/
  {
    path: 'Card',
    component: CardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'UPI',
    component: UpiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'NetBanking',
    component: NetbankingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Mobile',
    component: PatymComponent,
    canActivate: [AuthGuard]
  }
];


