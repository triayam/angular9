import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
 import { PayTmTestRoutes } from './pay-tm-test.routes';
// import { PayTmTestComponent } from './pay-tm-test.component';
import { ThridpartyComponent } from '../thridparty.component';
@NgModule({
 /* declarations: [  PayTmTestComponent, ThridpartyComponent  ],
  exports: [  PayTmTestComponent , ThridpartyComponent ],
  
  */
  imports: [RouterModule.forChild(PayTmTestRoutes),
    CommonModule , RouterModule
  ]
})
export class PayTmTestModule { }
