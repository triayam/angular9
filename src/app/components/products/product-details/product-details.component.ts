import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../classes/product';
import {CartService} from '../../../services/cart.service';
// import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-spa-product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {
  public product: Product = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productService: ProductService,
    private cartService: CartService) {



  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = +params['id'] + '';
     const prd =   this.productService
        .getProduct(id);
     console.log('prd ' + prd);
      this.product.productLogo = prd.productLogo;
      this.product.productCost = prd.productCost;
      this.product.productName = prd.productName;
    });
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/shipproducts');
  }
  
  /* routerCanReuse(next: ComponentInstruction, prev: ComponentInstruction) {
    return true;
  }
  */
}
