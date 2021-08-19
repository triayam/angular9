import { Component, OnInit } from '@angular/core';
import { Upi }  from './upi';
import { PaytmService } from '../../../../services/paytm.service';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.scss'] 
    
})
export class UpiComponent implements OnInit {
 
  constructor() { }
   upi = new Upi(); // { id: '' }; 
  /* public  upiForm: FormGroup = new FormGroup({
    upi: new FormControl('', [Validators.required, Validators.minLength(4)])
   
  }); */ 
 
  ngOnInit(): void {
    this.upi.id = 'dfafd';
    
    console.log('upi.id ' + this.upi.id);
    // this.upiForm.get('upi').patchValue('adfg@saf.com');
    // console.log(this.upiForm.value);
  }
  
   /* get f(){
    // return this.upiForm.controls;
  } */
  
  checkUPI() {
    //  var result = /^\w+@\w+$/.test(this.upiForm.controls.upi.value);
     var result = /^\w+@\w+$/.test(this.upi.id);
    return result;
  
  }
  
  onSubmit() {
    console.log(' on submit ');
    var result = /^\w+@\w+$/.test(this.upi.id);
    
    
    
    
    
    return false;
  }
  

}
