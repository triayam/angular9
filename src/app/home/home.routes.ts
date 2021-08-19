import { Route } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      }, 
      {  
        path: 'settings',

        loadChildren: () =>
          import('../home/settings/settings.module').then(m => m.SettingsModule)
      },
  
      {
        path: 'settings/2',
        loadChildren: () =>
          import('../home/paramsettings/param-settings.module').then(m => m.ParamSettingsModule)
      },
	{  
        path: 'fileupload',

        loadChildren: () =>
          import('../home/fileupload/file.module').then(m => m.FileModule)
      },

      {  
        path: 'jobbanner',
        loadChildren: () =>
          import('../home/banner/job-banner.module').then(m => m.JobBannerModule)
      },
  
      {
        path: 'shipproducts',
        loadChildren: () =>
          import('../components/products/publicproducts.module').then(m => m.PublicproductsModule)
      },
    
      {
        path: 'checkoutproducts',
         pathMatch: 'prefix',
        loadChildren: () =>
          import('../components/checkout/checkout.module').then(m => m.CheckoutModule)
      },
       {
        path: 'thirdparty',
         pathMatch: 'prefix',
        loadChildren: () =>
          import('../components/checkout/thridparty/test/thridparty.module').then(m => m.ThridPartyModule)
      },
       
      {
        path: 'user/:username',
        loadChildren: () =>
          import('../home/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'user/:username/:id',
        loadChildren: () =>
          import('../home/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'payorder',
        
        loadChildren: () =>
          import('../components/checkout/merchant-summary/merchants-summary.module').then(
            m => m.MerchantSummaryModule
          )
      },
       {
        path: 'payoptions',
        
        loadChildren: () =>
          import('../components/checkout/merchants/merchants.module').then(
            m => m.MerchantsModule
          )
      }
      
      
    ]
  }
];
/*
    {
        path: 'products',

        loadChildren: () =>
          import('../home/products/products.module').then(m => m.ProductsModule)
      },
*/