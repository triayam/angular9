import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../guards/auth.guard';
import { OrderGuard } from '../../../guards/order.guard';
import { MerchantsComponent } from '../merchants/merchants.component';
import { MerchantSummaryComponent } from './merchantsummary.component';

export const MerchantsRoutes: Routes = [
  {         
    path: 'merchants',
    pathMatch: 'full',
    component: MerchantSummaryComponent,
    canActivate: [AuthGuard, OrderGuard]
  }
  
];       

