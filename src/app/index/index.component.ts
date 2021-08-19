import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './animations';

/* Final Solution 
https://stackoverflow.com/questions/48479524/how-to-impliment-a-sidenav-navigation-drawer-with-a-mini-variant
*/
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'], 
  animations: [SlideInOutAnimation]
})
export class IndexComponent implements OnInit {
   animationState = 'out';
   show:boolean = false;
   
  constructor(public AuthService: AuthService) { }

  ngOnInit() {
    console.log(' Index Compomtn' );
  }

  toggleShowDiv() {
    
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
	  this.show = this.show === false ? true : false;
      console.log(this.animationState);
    
  }
}
