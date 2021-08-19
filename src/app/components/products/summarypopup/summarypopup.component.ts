import { Component, Input, OnInit } from '@angular/core';

import {Product, ProductColor, ProductFilter} from '../../../classes/product';
import {CartService} from '../../../services/cart.service';
import {ProductService} from '../../../services/product.service';
import { SlideInOutAnimation } from '../../../index/animations';

@Component({
  selector: 'app-summarypopup',
  templateUrl: './summarypopup.component.html',
  styleUrls: ['./summarypopup.component.css'],
  animations: [SlideInOutAnimation]
})
export class SummarypopupComponent implements OnInit {

  constructor(private cartService: CartService) { }
 @Input() public products: Product[] = [];
public items: Product[] = [];
 total;
  animationState = 'out';
  store;

  ngOnInit(): void {
  
      this.cartService
      .getItems()
      .subscribe((prods: Product[]) => {
        // remove prods that are in our cart
        const allProds = this.products;
        this.items = allProds.filter(_ => {
          return !this.itemIsInCart(_, prods);
        });
      });
      
      this.items = JSON.parse(localStorage.getItem("selected"));
      this.cartService.getTotalAmount().subscribe(price => {
       console.log(' price ' + price);
      this.total = price;} );
      
      if ( this.total ===0){
         localStorage.clear();
          this.items = JSON.parse(localStorage.getItem("selected"));
      }
      console.log('log items in Cart ' + JSON.stringify(this.items));
      console.log('total ' + JSON.stringify(this.total));
      
  }
  
  private itemIsInCart(item: Product, cart: Product[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
  
   toggleShowDiv() {
    
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
	 //  this.show = this.show === false ? true : false;
      console.log(this.animationState);
    
  }
}
