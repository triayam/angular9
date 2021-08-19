import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { FormsModule , ReactiveFormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { OrderGuard } from './guards/order.guard';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { NoPageModule } from './no-page/no-page.module';
import { AuthService } from './services/auth.service';
import { PaytmService } from './services/paytm.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index';
import { CarouselModule } from 'ngx-bootstrap/carousel';

/*import { J } from 'jquery';
declare var J: any;
console.log(`jQuery version: J{J.fn.jquery}`);*/

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    // tslint:disable-next-line:indent
	BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    NgbModule,
    NoPageModule, FormsModule , ReactiveFormsModule , HttpClientModule, 
    RouterModule.forRoot(routes, { useHash: true }),
    CarouselModule.forRoot()

  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [Md5 , AuthService, AuthGuard, OrderGuard, PaytmService, httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
