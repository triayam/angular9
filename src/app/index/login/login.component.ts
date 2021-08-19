import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  postData = {
    email: '',
    password: ''
  };
  public errorText: string;

  constructor(public authService: AuthService, public router: Router) {
    this.errorText = '';
  }

  ngOnInit() {
   this.postData.email='sample@email.com';
   console.log(' Login Compomtn' );
  }

  onSubmit(){

  }
  loginAction() {
    if (this.postData.email && this.postData.password) {
      if (this.authService.login(this.postData)) {
        if(this.router.url.indexOf('paytmtest') > -1 ) {
              this.router.navigate(['/thirdparty/paytmtest']);
        }
        this.router.navigate(['']);
      }
    } else {
      this.errorText = 'Please give valid data';
    }
  }
}
