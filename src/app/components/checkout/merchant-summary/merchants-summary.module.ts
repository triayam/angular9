import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MerchantsRoutes } from './merchants-summary.routes';
import { MerchantsComponent } from '../merchants/merchants.component';
import { MerchantSummaryComponent } from './merchantsummary.component';
@NgModule({
  declarations: [  MerchantSummaryComponent, MerchantsComponent  ],
  exports: [  MerchantSummaryComponent , MerchantsComponent ],
  
  
  imports: [RouterModule.forChild(MerchantsRoutes),
    CommonModule , RouterModule
  ]
})
export class MerchantSummaryModule { }
