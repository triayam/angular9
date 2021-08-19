import { Component, OnInit ,Input , ElementRef, ViewChild } from '@angular/core';
import { Route, Router , NavigationExtras } from '@angular/router';
import {Product, ProductColor, ProductFilter} from '../../../classes/product';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent implements OnInit {

  constructor(private  cartService: CartService, public router: Router) {  }
  
  public items: Product[] = [];
   @Input() public  products  : Product[] = [];
  total;
  @ViewChild("orderTable") orderDivView: ElementRef;


  ngOnInit(): void {
    
      this.items = JSON.parse(localStorage.getItem("selected"));
      console.log(' CheckoutSummary items ' + JSON.stringify(this.items));
      console.log(' CheckoutSummary products ' + JSON.stringify(this.products));
      this.cartService.getTotalAmount().subscribe(price => {
       console.log(' price ' + price);
      this.total = price;} );
      
      console.log(this.orderDivView);
      
  }
  addPayOptions (orderTable) {
   // var opts :  [ { modeType: 'UPI' }, {modeType: 'NetBanking'} , {modeType: 'Card' }, {modeType: 'Mobile' }];
    
    const queryParams: any = {};
    // Create our array of values we want to pass as a query parameter
    const opts = [ { modeType: 'UPI' }, {modeType: 'NetBanking'} , {modeType: 'Card' } , {modeType: 'Mobile' } ];

    // Add the array of values to the query parameter as a JSON string
    queryParams.myArray = JSON.stringify(opts);

    // Create our 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };
   //console.log(' orderTable ' + JSON.stringify(orderTable));
   this.orderDivView.nativeElement.innerHTML = " ";

   console.log(' this.orderDivView ' +   this.orderDivView.nativeElement.innerHTML);
   
   localStorage.setItem("opts", JSON.stringify(opts));
   
   this.router.navigate(['/payorder/merchants'] );
    
  }
  getCurrency() {
    return '$';
  }
  
  
}
/* CML = trdin + demat no 
   icici bank round 
*/

