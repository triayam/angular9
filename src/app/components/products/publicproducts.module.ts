
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { PublicProductsComponent } from './publicproducts.component';
import { ProductRoutes } from './publicproducts.routes';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SummarypopupComponent } from './summarypopup/summarypopup.component';

@NgModule({
  declarations: [PublicProductsComponent, ProductListComponent, ProductComponent, ProductDetailsComponent,
    ColorListComponent, ProductFilterComponent, ShoppingCartComponent, SummarypopupComponent],
  exports: [PublicProductsComponent, ProductDetailsComponent, ProductFilterComponent, ShoppingCartComponent],
  imports: [RouterModule.forChild(ProductRoutes), CommonModule, FormsModule, ComponentsModule]
})
export class PublicproductsModule {}
