import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.scss' ]
})
export class CardComponent implements OnInit {

  constructor() { 
    for (var i = 1; i < 13; i++) {
       this.mm.push(i);
    }
     for (var j= 2020; j < 2050; j++) {
       this.yy.push(j);
    }
  }
  // const rangeMM = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);  
  // _.range(1,12);// new Array(12).fill().map((x,i)=>{ reduce( p , cur) { } } );
    public mm: Array<number> = [];
    public yy: Array<number> = [];
 //  public yy: any = (start, end) => Array.from({length: (2050 - 2020)}, (v, k) => k + 2020);
  // _.range(2020,2050); // new Array(50).fill().map((x,i)=>i);
  
  ngOnInit(): void {
  }

}
