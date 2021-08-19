import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { JobBannerComponent } from './job-banner.component';
import { JobBannerRoutes } from './job-banner.routes';
import { SharedModule } from '../../common/sharedmodule';

@NgModule({
  declarations: [JobBannerComponent],
  exports: [JobBannerComponent],
  imports: [
    RouterModule.forChild(JobBannerRoutes),
    CommonModule,
    ComponentsModule /*, SharedModule*/
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [JobBannerComponent ],
})
export class JobBannerModule {
  constructor() {
    console.log("Job Banner mModule loaded")
  }
}
