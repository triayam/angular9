import { ChangeDetectionStrategy ,Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {CartService} from '../../../../services/cart.service';
import {PaytmService} from '../../../../services/paytm.service';
import { ModalComponent } from '../../../modal/modal.component';
import {NgForm } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Route, Router , NavigationExtras } from '@angular/router';
import { map , first , defaultIfEmpty , tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject, Subscriber , of } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patym',
  templateUrl: './patym.component.html',
  styleUrls: ['./patym.component.scss'  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PatymComponent implements OnInit {
 
 
 TEST_API_SERVER = "https://securegw-stage.paytm.in/theia/processTransaction";
 LOCAL_SERVER = "/login"; // http://localhost:4200/
  Node_POST = '/post';
  Node_READ = '/read';
 
 @ViewChild("payTMBody") orderPaytmView: ElementRef;
 @ViewChild("payTMError") orderPaytmErr: ElementRef;
 @ViewChild('f') form: NgForm;
 @ViewChild('p', { read: NgForm }) payForm: any;
 @ViewChild('saveButton') savbutton: ElementRef;
 @ViewChild('payBut') paybutton: ElementRef;
 @ViewChild("myIFrame") payIframe : ElementRef;
  closeResult: string;
 
  paytmForm = {
   
    TXN_AMOUNT : "23",
    MID : "bgBkEl45403033186773",
    WEBSITE : "mozenart",
    INDUSTRY_TYPE_ID : "Retail",
    CHANNEL_ID : "WEB",
    ORDER_ID : "YOUR_ORDER_ID",
    CUST_ID : "CUSTOMER_ID",
    MOBILE_NO : "9561700687",
    EMAIL : "vickyscab24@gmail.com",
    CALLBACK_URL : "https://65ivjubl53.execute-api.us-east-1.amazonaws.com",
    CHECKSUMHASH : ""
 };
public paytmParams = {
		// Find your MID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys */
		"MID" : "bgBkEl45403033186773",
        // Find your WEBSITE in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys */
		"WEBSITE" : "https://65ivjubl53.execute-api.us-east-1.amazonaws.com",
        // * Find your INDUSTRY_TYPE_ID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys  
		"INDUSTRY_TYPE_ID" : "Retail",
		// WEB for website and WAP for Mobile-websites or App */
		"CHANNEL_ID" : "WEB",
		// Enter your unique order id */
		"ORDER_ID" : "YOUR_ORDER_ID",
		// unique id that belongs to your customer */
		"CUST_ID" : "CUSTOMER_ID",
		// customer's mobile number */
		"MOBILE_NO" : "9561700687",
		// customer's email */
		"EMAIL" : "vickyscab24@gmail.com",
		//  Amount in INR that is payble by customer
		// this should be numeric with optionally having two decimal points
		
		"TXN_AMOUNT" : "23",
		// on completion of transaction, we will send you the response on this URL */
		"CALLBACK_URL" : "https://65ivjubl53.execute-api.us-east-1.amazonaws.com",
        "CHECKSUMHASH" : ""
	};


  public total = 0; 
  public mssg;
  
  constructor( private auth: AuthService, private cartService: CartService, private payTmService: PaytmService, private httpClient: HttpClient, private domSanitizer: DomSanitizer,private modalService: NgbModal, public router: Router ) { }

  ngOnInit(): void {
  
    const orderData = JSON.parse(localStorage.getItem('selected'));
    console.log(' order Data ' + JSON.stringify(orderData));
     
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 7;
    var ordStr = this.makeRandom(lengthOfCode, possible);
    
    
    this.paytmParams.ORDER_ID = ordStr + this.auth.make5len('kl');
    console.log(' orderid ' + this.paytmParams.ORDER_ID);
    orderData.forEach(data => {
       console.log(' price ' + data.productCost);
      this.total = this.total + Number(data.productCost).valueOf();} );
    
     
    this.paytmParams.TXN_AMOUNT =  this.total + '';
    this.paytmForm.ORDER_ID= this.paytmParams.ORDER_ID;
    this.paytmForm.TXN_AMOUNT= this.paytmParams.TXN_AMOUNT;
    console.log('this.paytmForm ' + JSON.stringify(this.paytmForm));
  }
  
  makeRandom(lengthOfCode: number, possible: string) {
      let text = "";
      for (let i = 0; i < lengthOfCode; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    return text;
 }   
 delay(ms: number) {
       return new Promise( resolve => setTimeout(resolve, ms) );
  }
    
  onSend(ev) {
  
   var json = JSON.stringify(this.paytmParams); 
      console.log(' formData '+ json);
      const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  var response = '';
  (async () => {
    
   this.httpClient.post<any>(this.Node_POST, JSON.stringify(this.paytmForm), { headers, responseType: 'text' as 'json'})
     .subscribe({
        next: data => { response = data; 
               this.open('sfsf');
         },
        
        error: error => { console.error('There was an error!', error); response = 'There was an error!';
                 console.log('error.text '+error.error.text );
                 this.mssg = this.domSanitizer.bypassSecurityTrustHtml(error.error.text);
                 // this.payIframe.nativeElement.contentWindow.document = this.mssg;
                  this.payIframe.nativeElement.src='data:text/html;charset=utf-8,' + encodeURI(this.mssg);
                  }
        })
    
     await this.delay(1000);    
     console.log('response ' + JSON.stringify(response));
  })();
    ev.preventDefault();
   
}
  
 open(content) {
 
   const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'Confirmation ';
    modalRef.componentInstance.my_modal_content = 'Confirm Your Order '+this.paytmForm.ORDER_ID+' for Processing';
    modalRef.result.then((result) => {
     if (result) {
        console.log(result);
        window.location.href = "/read";
     }  
   });
  
  }
  
}


/* ----------------------------------------------------------------------------------------------
public oldCode () {


//this.open('mymodel');
   
    //this.orderPaytmErr.nativeElement.innerHTML= "";
   //  this.orderPaytmErr.nativeElement.style.display= 'block';     
       
    // this.savbutton.nativeElement.click();
    //this.saveForm(new MouseEvent('click', {bubbles: true}));
    // this.form.ngSubmit.emit();
    var rs
     (async () => { 
        // Do something before delay
        console.log('before delay')
         this.orderPaytmErr.nativeElement.style.display= 'block';
          //this.savbutton.nativeElement.click();
          
        await this.delay(1000);
        this.orderPaytmErr.nativeElement.style.display= 'none';
        this.mssg = 'Sorry there is a issue with the Provider , try after some time';
        this.orderPaytmView.nativeElement.style.display= 'block';
        // Do something after
        console.log('after delay')
    })();
    
    //console.log('f.form.valid ' +this.form.valid);
    
   
        .pipe(
        tap( // Log the result or error
            data => this.extractData,
            error => this.handleError
            )
         );  
         
        this.payTmService.sendPostRequest(this.paytmParams).subscribe((data: any)=>{
          console.log(data);
          console.log('body ' + data);
          //this.products = data;
     }); 
     
    var formData: any = new FormData();
   formData.append('MID', this.form.controls.MID.value);
  formData.append('WEBSITE', this.form.controls.WEBSITE.value);
  formData.append('INDUSTRY_TYPE_ID', this.form.controls.INDUSTRY_TYPE_ID.value);
  formData.append('CHANNEL_ID', this.form.controls.CHANNEL_ID.value);
  formData.append('ORDER_ID', this.form.controls.ORDER_ID.value);
  formData.append('CUST_ID', this.form.controls.CUST_ID.value);
  formData.append('MOBILE_NO', this.form.controls.MOBILE_NO.value);
  formData.append('EMAIL', this.form.controls.EMAIL.value);
  formData.append('TXN_AMOUNT', this.form.controls.TXN_AMOUNT.value);;
  formData.append('CALLBACK_URL', this.form.controls.CALLBACK_URL.value);
  formData.append('CHECKSUMHASH',this.form.controls.CHECKSUMHASH.value);
   
  var object = {};
  formData.forEach(function(value, key){
    object[key] = value;
    console.log('key '+key + ' value '+value);
    });     
         
   var orderText = this.orderPaytmView.nativeElement.innerHTML;
    this.orderPaytmView.nativeElement.style.display= 'none';
 
    var spnnerText = '<div> Please do not referesh this page .... '+
                     ' <br/> <button class="btn btn-primary" disabled> '+
                    '<span class="spinner-grow spinner-grow-sm"></span> '+
                     '       Loading.. ' +
                     ' </button></div>';
    var CHECKSUM = '';
     this.payTmService.genarateSig(this.paytmParams).then((d)=> {
           CHECKSUM = d;
           console.log('check '+ d);
    });
    this.paytmParams.CHECKSUMHASH  = CHECKSUM; 
    console.log('check sum ' + this.paytmParams.CHECKSUMHASH);
            
         


}

 private extractData(res: Response) {
   let body = res.text();  // If response is a JSON use json()
   if (body) {
      console.log('body ' + body);
       return  body;
    } else {
       return {};
    }
}

private handleError(error: any) {
   // In a real world app, we might use a remote logging infrastructure
   // We'd also dig deeper into the error to get a better message
   let errMsg = (error.message) ? error.message :
   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
}
 
  saveForm($event: Event) {
    console.log('save clicked ');
    // $event.preventDefault();

    if (this.form.valid) {
      console.log(this.form.value);
      //alert('valid');
      this.form.ngSubmit.emit();
      return true;
    } else {
      //alert('invalid');
      return false;
    }
    
  }
thirdPartyRoute() {
    localStorage.setItem("paytmParams", JSON.stringify(this.paytmParams));
       this.router.navigate(['/thirdparty/paytmtest']);
       console.log(' moving to paytm Test ');
    
}


private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  
}
// refer 
   // "https://securegw-stage.paytm.in/order/process"; 
   // https://github.com/Paytm-Payments/Paytm_Web_Sample_Kit_PHP/blob/master/PaytmKit/lib/encdec_paytm.php


    
*/