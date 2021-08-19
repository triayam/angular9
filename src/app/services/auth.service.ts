import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// https://stackoverflow.com/questions/28272520/session-storage-variable-after-page-redirect-using-angularjs-route
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
   //   
    const userData = sessionStorage.getItem('userData');
    // console.log(userData);
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
    
  }

  public async login(postData) {
    var username = postData.email.split('@')[0];
    var len = this.make5len(username);
    
    const loginApiResponce = {
      name: username ,
      uid: Math.floor(Math.random()*(20-3+1)+3) % 10,
      token: '2323523523DFSWERWERWER'
    };
    await sessionStorage.setItem('userData', JSON.stringify(loginApiResponce));
    console.log('Login Data ');
    return true;
  }

  public async logout() {
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }
  public make5len(username) {
      var len = '';
     for (var i=0; i < 5 ; i++ ){
         len = len + Math.floor(Math.random()*(20-3+1)+3);
     }
    return len;
  }
}
