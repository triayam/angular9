import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GooglepayService {

  constructor() { }
  
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

