import { Injectable } from '@angular/core';

import * as data from './data.json';
// tslint:disable-next-line:import-spacing
import {Products}  from './products';
import construct = Reflect.construct;
import {Product, ProductColor} from '../classes/product';
@Injectable({
  providedIn: 'root'
})
/*
https://github.com/JsssCode/SmallAwesomeShop
*/
export class ProductService  {

  constructor() { }
  products: any = (data as any ).default;
  public cols: ProductColor[] = [];

  getProduct(id: string) {
    console.log('id ' + id);
    const pr = {} as  Product;
      data.products.forEach((val ) => {
       console.log('prodID ' + val.prodID);

           if (val.prodID.toString() === id) {
             val.colors.forEach((value1, idx) => {
               this.cols.push(<ProductColor>value1);
             });
              pr.productMiniLogo = val.productMiniLogo;
              pr.productLogo = val.productLogo;
              pr.productName = val.productName;
              pr.productCost = val.productCost;
              pr.prodID = val.prodID;
              pr.colors = this.cols;
              pr.id = Number(pr.id).valueOf();
              pr.name = pr.name;
              pr.price = pr.price;


           }
      });
     return pr;
    }

  getProducts(): ProductsC[] {

    console.log('data ' + JSON.stringify(data));
    console.log(data.products[0].prodID);
    console.log(data.products[0].productName);
    console.log(data.products[0].productCost);
    console.log(data.products[0].productLogo);

    // const prd   = { } as  Products;


    /* let prds[] : Array<Products> ; */
   /* prd.prodID = data.prodID;
    prd.productName = data.productName;
    prd.productCost = data.productCost;
    prd.productLogo = data.productLogo;
   */
    /* prds[0] = prd; */
    let  prd   = {} as  Products;
    // tslint:disable-next-line:indent
	   const prds: Products[] = [];

    // tslint:disable-next-line:indent

    data.products.forEach(( value) => {

      prd.prodID = value.prodID;
      prd.productCost = value.productCost;
      prd.productLogo = value.productLogo;
      prd.productMiniLogo = value.productMiniLogo;
      prd.productName = value.productName;
      prd.id = value.id.toString();
      prd.name = value.name;
      prd.price = value.price.toString();
      console.log(' type of Object ' + typeof value.colors);
      value.colors.forEach((value1 , idx) => {
        console.log(' ' +  value1);
        this.cols.push( <ProductColor> value1);
      });
      prd.colors = this.cols;
      this.cols  = [];
      // prd.colors = [ <ProductColor> value.colors[0] , <ProductColor> value.colors[1] ];

      prds.push(prd);
      prd = {} as Products;

    });
    // tslint:disable-next-line:indent
	  // prds = data.products;

    // tslint:disable-next-line:indent
	  console.log('prds ' + JSON.stringify(prds));

    return prds;
  }

}
 class ProductsC implements Products {
    prodID: string;
   // tslint:disable-next-line:indent
  	productName: string;
   // tslint:disable-next-line:indent
	  productCost: string;
   // tslint:disable-next-line:indent
  	productLogo: string;
    productMiniLogo: string;
   id: string;
   name: string;
   price: string;
   colors: Object[];
  }





