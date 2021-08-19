import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {
  constructor( public router: Router){

  }
  username;
  id;
  
  canActivate(): boolean {
   console.log(' Order Guard Compomtn' );
   
   const userData = JSON.parse(sessionStorage.getItem('userData'));
   const orderData = JSON.parse(localStorage.getItem('selected'));
   const opts = JSON.parse(localStorage.getItem('opts'));
   
   console.log('opts ' + JSON.stringify(opts));
   console.log('userData ' + JSON.stringify(userData));
   console.log('orderData ' + JSON.stringify(orderData));
   // console.log(' userData ' + JSON.stringify(userData));
   // console.log(' userData.length ' +  userData.length);
    if (userData && orderData && opts) { 
       this.username = userData['name'];
       this.username = this.username.split(" ")[0];
       this.id= userData['uid'];
       return true;
    }
    else
     {
      // this.router.navigate(['login']);
      return false;
    } 
    return true;
  }
}
