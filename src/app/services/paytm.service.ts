import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
//import * as variable from 'paytmChecksum';
import { Paytmchecksum } from './paytmchecksum';
import {BehaviorSubject, Observable, Subject, Subscriber , of } from 'rxjs';
import { map , first , defaultIfEmpty , tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaytmService {

  private TEST_API_SERVER = "https://securegw-stage.paytm.in/order/process";
  /* private MD5: Md5, */
  constructor( private httpClient: HttpClient) {
  
   //const md5 = new Md5();
   //console.log(md5.appendStr('hello').end());
      
  }
  
  public sendGetRequest() {
  
   return this.httpClient.get(this.TEST_API_SERVER); 
   
  }
  
  public genarateSig(paytmParams) {
   var payTM = new Paytmchecksum();
   var paytmChecksum = payTM.generateSignature(paytmParams, '!AlG9%OnEGCAzlBs');
    return paytmChecksum;
  }
    
  // cryto issues https://github.com/iden3/snarkjs/issues/17
  
  public sendPostRequest(paytmParams): Observable<any> {
   
   const httpOptions = {
    headers: new HttpHeaders({
    'Accept': 'text/html, application/xhtml+xml, */*',
    'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  }; 
   
  // Send the post the formData 
  const formData = new FormData();
  
  /*
   TXN_AMOUNT : "23",
    MID : "bgBkEl45403033186773",
    WEBSITE : "https://65ivjubl53.execute-api.us-east-1.amazonaws.com",
    INDUSTRY_TYPE_ID : "Retail",
    CHANNEL_ID : "WEB",
    ORDER_ID : "YOUR_ORDER_ID",
    CUST_ID : "CUSTOMER_ID",
    MOBILE_NO : "9561700687",
    EMAIL : "vickyscab24@gmail.com",
    CALLBACK_URL : "https://65ivjubl53.execute-api.us-east-1.amazonaws.com",
    CHECKSUMHASH : ""
  
  */
 
  formData.append('MID', paytmParams.MID);
  formData.append('WEBSITE', paytmParams.WEBSITE);
  formData.append('INDUSTRY_TYPE_ID', paytmParams.INDUSTRY_TYPE_ID);
  formData.append('CHANNEL_ID', paytmParams.CHANNEL_ID);
  formData.append('ORDER_ID', paytmParams.ORDER_ID);
  formData.append('CUST_ID', paytmParams.CUST_ID);
  formData.append('MOBILE_NO', paytmParams.MOBILE_NO);
  formData.append('EMAIL', paytmParams.EMAIL);
  formData.append('TXN_AMOUNT', paytmParams.TXN_AMOUNT);
  formData.append('CALLBACK_URL', paytmParams.CALLBACK_URL);
  formData.append('CHECKSUMHASH',paytmParams.CHECKSUMHASH );
   
  var object = {};
  formData.forEach(function(value, key){
    object[key] = value;
    console.log('key '+key + ' value '+value);
    });
   
  // Display the key/value pairs
  /*for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]);
    object[pair[0]] = pair[1];
    }  
    */
  var json = 'JsonData='+JSON.stringify(formData); 
   console.log(' formData '+ formData.toString());
  // .subscribe
  const headers = { 
  'Accept': 'text/html, application/xhtml+xml, */*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  //   ( (res) => console.log(res), (err) => console.log(err)); 
  return this.httpClient.post<any>(this.TEST_API_SERVER, json , {headers})
         .pipe(
         
        tap( // Log the result or error
            data => this.extractData,
            error => this.handleError
            )
         );  
         
   
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
 
 
 
 
 
 
 
}
  
/*
  // EDAGNPA7583R1ZD GST format
  public createPayRequest():  {
   //   
    const orderDetails =  JSON.parse(localStorage.getItem('selected'));
    // console.log(userData);
   let request = null;
    try {
       request = new PaymentRequest(supportedInstruments, details);
    } catch (e) {
      console.log('Payment Request Error: ' + e.message);
      return;
    }
    if (!request) {
      console.log('Web payments are not supported in this browser.');
      return;
    }
   
   
  }
}

export const supportedInstruments = [
    {
      supportedMethods: ['https://tez.google.com/pay'],
      data: {
        pa: 'merchant-vpa@xxx',
        pn: 'Merchant Name',
        tr: '1234ABCD',  // your custom transaction reference ID
        url: 'http://url/of/the/order/in/your/website',
        mc: '1234', // your merchant category code
        tn: 'Purchase in Merchant',
      },
    }
  ];
  
export const details = {
  total: {
    label: 'Total',
    amount: {
      currency: 'INR',
      value: '10.01', // sample amount
    },
  },
  displayItems: [{
    label: 'Original Amount',
    amount: {
      currency: 'INR',
      value: '10.01',
    },
  }],
};

*/ 
