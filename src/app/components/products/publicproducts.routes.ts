
import { Route } from '@angular/router';
import { PublicProductsComponent } from './publicproducts.component';
import {  ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const ProductRoutes: Route[] = [
  {
    path: '',
    component: PublicProductsComponent
  },
  {
    path: 'products/details/:id',
    component: ProductDetailsComponent
  },
  // tslint:disable-next-line:indent
  {
    path: 'products/cart',
    component: ShoppingCartComponent
  }
];
