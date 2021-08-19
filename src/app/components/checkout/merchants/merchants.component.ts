import { Component, OnInit, Input } from '@angular/core';
import { Route, Router , NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-merchant-summary',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {


  public options: Object[]  = [ { modeType: "UPI" }, {modeType: "NetBanking"} , {modeType: "Card" }, {modeType: "Mobile" }];
  @Input() public opts: Object [] = [];
  items: any;
  selectedOpts: any = { modeType: "UPI" };
  
  constructor(private router: Router) {
   this.opts = JSON.parse(localStorage.getItem('opts'));
     console.log(' opts ' + JSON.stringify(this.opts));
  }

  ngOnInit(): void {
  
   console.log('Merchants comp ' );
   
  }
  onSelect(opt: Object): void {
  
    this.selectedOpts = opt;
    console.log(' this.selectedOpts ' + JSON.stringify(this.selectedOpts));
    
    
    this.router.navigate(['/payoptions/' + this.selectedOpts.modeType]);
  }

}

    