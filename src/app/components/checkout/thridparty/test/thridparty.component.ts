import { Component, OnInit , Input  } from '@angular/core';

@Component({
  selector: 'app-thridparty',
  templateUrl: './thridparty.component.html',
  styleUrls: ['./thridparty.component.scss']
})
export class ThridpartyComponent implements OnInit {

  constructor() { }
 @Input() public paytmparams: Object [] = [];
 
  ngOnInit(): void {
  
   this.paytmparams = JSON.parse(sessionStorage.getItem('userData'));
  }

}
