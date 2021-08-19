import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ThridPartyRoutes } from './thridparty.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
  import { ThridpartyComponent } from './thridparty.component';
import { PayTmTestComponent } from '../test/pay-tm-test/pay-tm-test.component';

@NgModule({
  /* declarations: [ MerchantsComponent ],
  exports: [ MerchantsComponent , CommonModule, FormsModule  ],
  */
  
  imports: [RouterModule.forChild(ThridPartyRoutes),
    CommonModule, FormsModule , HttpClientModule 
  ],
  declarations: [ ThridpartyComponent , PayTmTestComponent]
})
export class ThridPartyModule { }
