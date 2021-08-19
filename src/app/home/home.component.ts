import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }
  name; 
  id;
  
  ngOnInit() {
  
     console.log(' Home Compomtn' );
    // get User Name and ID from session Storage
     console.log('url ' +  this.router.url);
     const userData = JSON.parse(sessionStorage.getItem('userData'));
    // console.log(userData);
    if (userData ) {
      
     if (userData.url) {
    if(userData.url.indexOf('paytmtest') > -1 ) {
              this.router.navigate(['/thirdparty/paytmtest']);
              }
        }
        }
 /* const userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(userData);
    if (userData) {
       this.name = userData.name;
       this.id = userData.uid;
       console.log('name ' + this.name + ' id ' + this.id);
       this.router.navigate(['']).then( (e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
       });
    } else {
      console.log('moving login page' );
      this.router.navigate(['login']);
    }
   */
  }

  logoutAction() {
  
    if(this.authService.logout())
    {
      this.router.navigate(['login']);
    }
  }

}
