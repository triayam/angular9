import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateService } from './../../services/validate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
/* 
https://medium.com/serverlessguru/deploying-angular-to-aws-in-seconds-or-10-minutes-941faa8c0aab
https://stackblitz.com/edit/angular-kfxw98?file=src%2Fapp%2Fapp.component.html
https://stackoverflow.com/questions/58895143/angular-8-multiple-forms-on-one-page
https://stackblitz.com/edit/angular-vyqqm5?file=src/app/login.component.ts
https://developer.paytm.com/docs/transaction-status-api/
*/
export class UserComponent implements OnInit, OnDestroy {
  username: string;
  id: string;
  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private validateService: ValidateService,
    private router: Router
  ) {}

  ngOnInit() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    // console.log(' userData ' + JSON.stringify(userData));
    // console.log(' userData.length ' +  userData.length);
    if (userData ) { 
       this.username = userData['name'];
       this.username = this.username.split(" ")[0];
       if (this.check(this.username,'username ') == false ){
          this.username = userData['name'];
       }
       this.id= userData['uid'];
    }
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      var u = params.get('username');
      var id = params.get('id');
      // console.log(' u ' + u + ' id ' + id );
      if (this.check(u,'u') == false) {
       //  console.log(' this.username ' + this.username );
        this.verifyUsername(this.username);
      }
      else {
        this.verifyID(params.get('username'));
      }
      if (this.check(id,'id') == false ){
       // console.log(' this.id ' + this.id );
         this.verifyID(this.id);
      } 
      else {
      
        this.verifyID(params.get('id'));
      }
      
     
    });
  }

  verifyUsername(data: string) {
   // console.log('data ' + data);
    if (data && this.validateService.checkUsername(data)) {
      this.username = data;
    } else {
      this.router.navigate(['noPage']);
    }
  }

  verifyID(data: string) {
   // console.log('data ' + data);
    if (data) {
      if (this.validateService.checkID(data)) {
        this.id = data;
      } else {
        this.router.navigate(['noPage']);
      }
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  
  check(x, name) {
    if (x == null) {
        // console.log(name + ' == null');
        return false;
    }

    if (x === null) {
       // console.log(name + ' === null');
        return false;
    }

    if (typeof x === 'undefined') {
       // console.log(name + ' is undefined');
        return false;
    }
    return true;
}
}
