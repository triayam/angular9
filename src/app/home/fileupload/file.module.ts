import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { FileComponent } from './file.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FileRoutes } from './file.routes';
import { FormsModule , ReactiveFormsModule }  from '@angular/forms';

@NgModule({
  declarations: [FileComponent],
  exports: [FileComponent],
  imports: [
    RouterModule.forChild(FileRoutes),
    CommonModule,
    ComponentsModule,
    FormsModule,
    BsDatepickerModule
  ]
})
export class FileModule {}
