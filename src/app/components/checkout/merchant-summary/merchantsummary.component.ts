import {AfterViewInit, Component, OnInit, Input} from '@angular/core';

import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
/* import { ProductService} from '../../services/product.service';
import {Product, ProductColor, ProductFilter} from '../../classes/product';
import {Products} from '../../services/products';
import {CartService} from '../../services/cart.service';
*/
 
@Component({
  selector: 'app-merchant-options',
  templateUrl: './merchantsummary.component.html',
  styles: []
})
export class MerchantSummaryComponent implements OnInit  {

  // @Input() public options: Object[]  = [];
  
  public opts: any;
  
  constructor(private activatedRoute: ActivatedRoute) {
  
    console.log(' Merchant Component  ' );
     // Get the query string value from our route
    //const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

    // If the value is null, create a new array and store it
    // Else parse the JSON string we sent into an array
    /* if (myArray === null) {
      this.opts = new Array<Object>();
    } else {
      this.opts = JSON.parse(myArray);
    }
    */
   
    
     this.opts = JSON.parse(localStorage.getItem('opts'));
      console.log(' this.opts ' + JSON.stringify(this.opts));
     
  
  }
  
  
  ngOnInit(): void { 
    //console.log(' Merchant Component  ' );
   
   // console.log(' Merchant Component  ' );
     // Get the query string value from our route
    //const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

    // If the value is null, create a new array and store it
    // Else parse the JSON string we sent into an array
   /* if (myArray === null) {
      this.opts = new Array<Object>();
    } else {
      this.opts = JSON.parse(myArray);
    }
    console.log('constru this.opts ' + JSON.stringify(this.opts));
    */
     this.opts = JSON.parse(localStorage.getItem('opts'));
      console.log(' onInit this.opts ' + JSON.stringify(this.opts));
     
    
  }

 




}
