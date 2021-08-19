import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MerchantsRoutes } from './merchants.routes';
import { PatymComponent } from './patym/patym.component';
import { UpiComponent } from './upi/upi.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { MerchantsComponent } from './merchants.component';

@NgModule({
  /* declarations: [ MerchantsComponent ],
  exports: [ MerchantsComponent , CommonModule, FormsModule  ],
  */
  
  imports: [RouterModule.forChild(MerchantsRoutes),
    CommonModule, FormsModule , HttpClientModule 
  ],
  declarations: [PatymComponent, UpiComponent, NetbankingComponent, CardComponent]
})
export class MerchantsModule { }
