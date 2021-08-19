import { Component, OnInit } from '@angular/core';
import 'bootstrap';
 

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
   /* $('.carousel').carousel({
        interval: 2000
    });
*/
   
  } 

}
