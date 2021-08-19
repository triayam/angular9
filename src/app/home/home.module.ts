import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from './../components/components.module';
// import { SharedModule } from '../common/shared.module';
import { HomeComponent } from './home.component';
/*import { UserComponent } from './user/user.component'; */
  import { UserModule } from './user/user.module';  
import { RouterModule } from '@angular/router';
import { PositionService } from './advert/position-service';
@NgModule({ 
  imports: [CommonModule, ComponentsModule, RouterModule , UserModule],
  providers: [PositionService],
  declarations: [HomeComponent ],
  exports: [HomeComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
