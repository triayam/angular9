import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../../guards/auth.guard';
import { OrderGuard } from '../../../../../guards/order.guard';
import { ThridpartyComponent } from '../thridparty.component';
import { PayTmTestComponent } from './pay-tm-test.component';

export const PayTmTestRoutes: Routes = [
  
  
];       

/*

{         
    path: 'paytmtest',
    pathMatch: 'full',
    component: PayTmTestComponent,
    canActivate: [AuthGuard, OrderGuard]
  }


*/
