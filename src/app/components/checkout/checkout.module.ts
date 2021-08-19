
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { ComponentsModule } from '../../components/components.module';
import { CheckoutRoutes } from './checkout.routes';
import { CheckOutComponent } from './checkout.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';

// import { MerchantSummaryModule } from './merchant-summary/merchants-summary.module';
@NgModule({
  declarations: [ CheckoutSummaryComponent , CheckOutComponent,  ],
  exports: [ CheckoutSummaryComponent, CheckOutComponent ,  RouterModule ],
  imports: [RouterModule.forChild(CheckoutRoutes), CommonModule, FormsModule]
  
})
export class CheckoutModule {}

/* MerchantSummaryModule */