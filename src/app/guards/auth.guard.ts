import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router){

  }
  canActivate(): boolean {
   console.log(' AuthGuard Compomtn' );
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
      console.log(' not authenticated ' );
      return false;
    } 
    return true;
  }
}
