import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { NameComponent } from './name/name.component';
import { SlideinoutComponent } from './slider/slideinout/slideinout.component';
import { PublicProductsComponent } from './products/publicproducts.component';
// import { MerchantsComponent } from './checkout/merchants/merchants.component';
//  import { CheckoutSummaryComponent } from './checkout/checkout-summary/checkout-summary.component';
import { CheckoutModule } from './checkout/checkout.module';
import { MerchantsModule } from './checkout/merchants/merchants.module';
//import { ModalComponent } from './modal/modal.component';
@NgModule({
 /* , PublicproductsComponent */
  declarations: [NameComponent, LogoComponent, ButtonComponent, SlideinoutComponent],
  exports: [NameComponent, LogoComponent, ButtonComponent, SlideinoutComponent ],
  imports: [CommonModule, CheckoutModule]
})
export class ComponentsModule {}
