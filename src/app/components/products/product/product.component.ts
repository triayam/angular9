import {ChangeDetectionStrategy, Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router , RouterEvent,  RoutesRecognized} from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-spa-product',
  templateUrl: `./product.component.html`,
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit , AfterViewInit {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.height  = '7';
    this.width  = '10';
    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((event: any[]) => {
        console.log('previous url', event[0].urlAfterRedirects);
        console.log('current url', event[1].urlAfterRedirects);
        this.previousUrl = this.currentUrl;
        this.currentUrl = event[1].url;
      });
  }
  @Input() public id: string;
  @Input() public name: string;
  @Input() public cost: string;
  @Input() public logo: string;

  @Input() public prodID: string;
  @Input() public productName: string;
  @Input() public productCost: string;
  @Input() public productLogo: string;
  @Input() public productMiniLogo: string;
  size = '10';
  height  = '4';
  width  = '3';
  isDetail = false;

  ngOnInit(): void {
    console.log('current url ' + this.currentUrl);
    console.log('current url ship  ' + this.currentUrl.includes('ship'));
    if (this.productLogo.includes('mini') && this.currentUrl.includes('ship')) {
      this.height = '4';
      this.width = '6';
      this.isDetail = false;
    } else {
      this.height = '15';
      this.width = '15';
      this.isDetail = true;
    }
  }

  ngAfterViewInit(): void {
    /*if (this.productLogo.includes('Mini')  && this.currentUrl.includes('ship')) {
      this.height = '7';
      this.width = '10';
    } else {
      this.height = '15';
      this.width = '15';
    }*/

  }

  getCurrency() {
    return '$';
  }

}
