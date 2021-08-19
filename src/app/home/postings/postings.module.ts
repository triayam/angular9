import { CommonModule } from '@angular/common';
import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobBannerModule} from '../banner/job-banner.module';
import { ComponentsModule } from '../../components/components.module';
import { PostingsComponent } from './postings.component';
import { PostingsRoutes } from './postings.routes';

@NgModule({
  declarations: [PostingsComponent],
  exports: [PostingsComponent],
  imports: [
    RouterModule.forChild(PostingsRoutes),
    CommonModule,
    ComponentsModule,
    JobBannerModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PostingModule {}
