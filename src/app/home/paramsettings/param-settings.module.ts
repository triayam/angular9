import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ParamSettingsComponent } from './param-settings.component';
import { ParamSettingsRoutes } from './param-settings.routes';

@NgModule({
  declarations: [ParamSettingsComponent],
  exports: [ParamSettingsComponent],
  imports: [
    RouterModule.forChild(ParamSettingsRoutes),
    CommonModule,
    ComponentsModule
  ]
})
export class ParamSettingsModule {}
