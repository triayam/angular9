import { Component, Input, OnInit } from '@angular/core';
import { NameComponent } from '../../components/name/name.component';
@Component({
  selector: 'app-settings',
  templateUrl: './param-settings.component.html',
  styleUrls: ['./param-settings.component.scss']
})
export class ParamSettingsComponent implements OnInit {

  public param :any  = [];
  @Input ("name") public name: any;
  public params: string[] = [ 'shopname','sitename','username','browsername','appname','storename' ];

  

  

  constructor() { 
     let x ="" , idx="";
      const loginUser = sessionStorage.getItem('userData');
      const userData = JSON.parse(loginUser);
     for( idx in this.params ) {
       console.log("x " +idx);
       let x=  this.params[idx];
       switch(x) {
           case 'shopname': { this.param[x] = 'Shopfu' ; break; }
          case 'sitename': { this.param[x] = 'Mozenrat'; break; } 
         case 'username': {  
			  if(userData && userData.name )   
                             this.param[x] = userData.name ;
			  else 
                              this.param[x] = 'Mozen' ;

                          break; } 
          case 'browsername': { this.param[x] = 'X-browser'; break; } 
	case 'appname': { this.param[x] = 'Mosenrat'; break; } 
	case 'storename': { if(userData && userData.name )   
                             this.param[x] = userData.name +'-Store' ;
			  else 
                              this.param[x] = 'Mozen'+'-Store' ; break; } 
           } 
       console.log("param name "+ this.param[x]);
     }
      

  }

  ngOnInit() {
  }
  
}
