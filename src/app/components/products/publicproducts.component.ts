import {AfterViewInit, Component, OnInit, Input} from '@angular/core';
import { ProductService} from '../../services/product.service';
import {Product, ProductColor, ProductFilter} from '../../classes/product';
import {Products} from '../../services/products';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-spa-products',
  templateUrl: './publicproducts.component.html',
  styles: []
})
export class PublicProductsComponent implements OnInit , AfterViewInit {

  private productService: ProductService;
  public products: Product[] = [];
  public productsTwo: Product[] = [];
  public cols: ProductColor[] = [];
  public  myObject = {} as Product;

  constructor(productService: ProductService, private cartService: CartService) {
    this.productService = productService;

  }

  private itemIsInCart(item: Product, cart: Product[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }

  ngOnInit(): void {
    const prd = this.productService.getProducts();
    prd.map( value => {
        console.log( ' value length ' + value.colors.length);
        for ( let i = 0 ; i < value.colors.length; i++) {
          console.log(' value.colors[' + i + '] ' + value.colors[i]);
          this.cols.push(
            <ProductColor> value.colors[i] );
         }

       /* value.colors.forEach((value1, idx) => {
          this.cols.push(<ProductColor>value1);
        });*/

       const a = {} as Product ;
        a.id = Number(value.id).valueOf();
        a.name = value.name;
        a.price = Number(value.price).valueOf();
        a.currency = '';
        a.colors =  this.cols;
        a.picture = '';
        a.prodID = value.prodID;
        a.productName = value.productName;
        a.productCost = value.productCost;
        a.productLogo = value.productLogo;
        a.productMiniLogo = value.productMiniLogo;
      delete this.cols;
      const withAssertion = <ProductColor[]>[];
      this.cols = withAssertion;
        return   a ;

      }
    ).forEach(p => {
      console.log(' typeOf P ' + typeof p);
      console.log(' JSON Stringify p' + JSON.stringify(p));
      this.products.push(p);
    });

    this.cartService
      .getItems()
      .subscribe((prods: Product[]) => {
        // remove prods that are in our cart
        const allProds = this.products;
        this.products = allProds.filter(_ => {
          return !this.itemIsInCart(_, prods);
        });
      });
  }

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");npm
      const prd = this.productService.getProducts();
     // this.cost = prd[0].productCost;

      this.productsTwo = [
      <Product>{id: 1, name: 'Blue item', price: 123.09, colors: ['blue'],
        prodID:  '24123', productName:  'Shirt', productCost: '23' , productLogo:  'assets/img/products/t-shirt.JPG'},
      <Product>{id: 2, name: 'Green and gray', price: 99.09, colors: ['green', 'gray']   ,
      prodID:  '24123', productName:  'Shirt', productCost: '23' , productLogo:  'assets/img/products/sweat-shirt.JPG'}
      ];

      // console.log(' productsTwo ' + this.productsTwo);
      // console.log(' productsTwo JSON ' + JSON.stringify(this.productsTwo));
      if (Array.isArray(prd)) {
        console.log('prd is array  ' );
      } else { /* We are working with object */
        Object.keys(prd).forEach((key) => {
          console.log('prd is not array ' );
          /* Here you can iterate over each key in object */
        });
      }

     // this.products = this.productsTwo;
    console.log('products array ' + JSON.stringify(this.products));
    // this.products = this.productsTwo;
    // console.log('rpoducts aaray ' + JSON.stringify(this.products));
    // console.log('product ' + JSON.stringify(prd));
 }




}
