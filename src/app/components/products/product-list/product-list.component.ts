import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product, ProductColor, ProductFilter} from '../../../classes/product';
import {CartService} from '../../../services/cart.service';
import {ProductService} from '../../../services/product.service';

declare var $: any;
@Component({
  selector: 'app-spa-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  constructor(private cartService: CartService, private productService: ProductService) {
    
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => _);

  }
  @Input() public products: Product[] = [];
  public backup: Product[] = [];
  public cols: ProductColor[] = [];
  shoppingCartItems$;
  cartClicked = false;

  public readonly filters: ProductFilter [] = [
    <ProductFilter>{color: 'blue'},
    <ProductFilter>{color: 'green'},
    <ProductFilter>{color: 'gray'}
  ];
  public selects  = [ 'blue', 'green', 'gray'];

  public activeFilters: ProductFilter[] = [];
  userColor;


  ngOnInit(): void {
    this.userColor = 'blue';
   
    if (this.products.length == 0 ) { 
    
        this.populateProducts();
        console.log(' caled Populate Products');
    }
    this.backup = this.products;
    this.onOptionsSelected('blue');
    /* $('#cart').on('click', function () {
        $('.shopping-cart').fadeToggle('fast');
      }); */
  }
  public onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    // filter the values
    // tslint:disable-next-line:prefer-const no-shadowed-variable
    const withAssertion = <ProductColor[]>[];
    withAssertion.push(<ProductColor> value );
    this.products = this.backup;

    const newProd: Product[] = [];
     this.itemsAfterFilter().filter(product => {  if (product.colors.find(_ => {
      console.log(' _ ' + _.toString() );
       return _.toString() === value;
       })  ) {
        newProd.push(product);
        return product;
     }
    });
     this.products = [];
     this.products  = newProd;
    console.log('the products are ' + JSON.stringify(this.products));
  }

  public itemsAfterFilter(): Product[] {

    return this.products.filter(
      (product: Product) => {
         const matchesActiveFilter: boolean = this.activeFilters.reduce(
           (previousValue, currentValue) => {
             if (product.colors.includes(currentValue.color)) {
                return previousValue && true;
             } else {
               return false;
             }
           }, true);
            return matchesActiveFilter;
          });

      }
    public updateActivatedFilters(filters: ProductFilter[]) {
     this.activeFilters = filters;
    }
    public popCart() {
       this.cartClicked = !this.cartClicked;
    }

  public populateProducts() {
  
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
  
  private itemIsInCart(item: Product, cart: Product[]): boolean {
  
    return cart.find(_ => _.id === item.id) != null;
    
  }
  
  
  
}
