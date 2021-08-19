import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// https://stackoverflow.com/questions/48369079/ngx-bootstrap-carouselmodule-not-working
import { ComponentsModule } from '../../components/components.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';


@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent ],
  imports: [
    RouterModule.forChild(DashboardRoutes),
    CommonModule,
    ComponentsModule,
    CarouselModule
  ],
  bootstrap:[DashboardComponent]
})
export class DashboardModule {}
