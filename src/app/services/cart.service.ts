import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import {BehaviorSubject, Observable, Subject, Subscriber , of } from 'rxjs';
// import { of } from 'rxjs/observable/of';
import { map , first , defaultIfEmpty } from 'rxjs/operators';
import {ProductFilter} from '../classes/product-filter';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private itemsInCart: Product[] = [];
  private id;
  private getValue;
  private store;

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);

  }
  public addToCart (item: Product) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
    
    // console.log(localStorage.getItem(a.id));
    /* if(localStorage.getItem(item.id)){
        this.id = localStorage.getItem(item.id);
        // sessionStorage.clear()
    }     */
    this.store = localStorage.setItem("selected", JSON.stringify(this.itemsInCart));
    this.getValue = JSON.parse(localStorage.getItem("selected"));
    
  }
  public removeFromCart(item: Product) {
    const   currentItems = [...this.itemsInCart ];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);

  }
  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject.asObservable();
  }
  
  public getTotalAmount(): Observable<number> {
   const temp: Product [] = [];
    
   const cartBucket: Observable<Product[]>  = this.itemsInCartSubject.asObservable();
   if(cartBucket != undefined ) { 
     return  cartBucket.pipe(
      map(
      (items: Product[]) => {
      return items.reduce((prev, curr) => {
       // console.log( 'prev ' + prev + ' curr.productCost ' + curr.productCost);
        return  prev + Number(curr.productCost).valueOf();
      }, 0)
    })
    );
   }
    else {
     return of(0);
   }
 
 }
}   

/* 

 this.itemsInCartSubject.forEach((prd: Product[] ) => {
      prd.forEach(value => { temp.push(value); });
       // return prd;
    }).then(value => {});
     // let rt = {} as  Observable<number>;
    let r  = 0;
    this.itemsInCartSubject.forEach((items: Product[]) => {
      r =  items.reduce((prev, curr) => {
             return prev + Number(curr.productCost).valueOf();
      }, 0);
    }).then(value => {});
    // return  of (r);
    console.log(' total Amount ' + r);
      this.itemsInCartSubject.pipe((prd: Product[]) => {
        prd.forEach( p => {
        temp.push(p);
       });
     
  
    return this.itemsInCartSubject.filter((items: Product[]) => {
      return items.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);
    });
    } 
*/