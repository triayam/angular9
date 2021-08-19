"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var paytmchecksum_1 = require("./paytmchecksum");
var PaytmService = /** @class */ (function () {
    /* private MD5: Md5, */
    function PaytmService(httpClient) {
        //const md5 = new Md5();
        //console.log(md5.appendStr('hello').end());
        this.httpClient = httpClient;
        this.TEST_API_SERVER = "https://securegw-stage.paytm.in/order/process";
    }
    PaytmService.prototype.sendGetRequest = function () {
        return this.httpClient.get(this.TEST_API_SERVER);
    };
    PaytmService.prototype.sendPostRequest = function (paytmParams) {
        // Send the post the formData 
        var formData = new FormData();
        var CHECKSUM = '';
        var payTM = new paytmchecksum_1.Paytmchecksum();
        var paytmChecksum = payTM.generateSignature(paytmParams, '!AlG9%OnEGCAzlBs');
        console.log('paytmChecksum  ' + paytmChecksum);
        paytmChecksum.then(function (checksum) {
            CHECKSUM = checksum;
            console.log("generateSignature Returns: " + checksum);
        })["catch"](function (error) {
            console.log(error);
        });
        formData.append('MID', paytmParams.MID);
        formData.append('WEBSITE', paytmParams.YOUR_WEBSITE_HERE);
        formData.append('INDUSTRY_TYPE_ID', paytmParams.YOUR_INDUSTRY_TYPE_ID_HERE);
        formData.append('CHANNEL_ID', paytmParams.YOUR_CHANNEL_ID);
        formData.append('ORDER_ID', paytmParams.YOUR_ORDER_ID);
        formData.append('CUST_ID', paytmParams.CUSTOMER_ID);
        formData.append('MOBILE_NO', paytmParams.CUSTOMER_MOBILE_NUMBER);
        formData.append('EMAIL', paytmParams.CUSTOMER_EMAIL);
        formData.append('TXN_AMOUNT', paytmParams.ORDER_TRANSACTION_AMOUNT);
        formData.append('CALLBACK_URL', paytmParams.YOUR_CALLBACK_URL);
        formData.append('CHECKSUMHASH', CHECKSUM);
        // .subscribe
        //   ( (res) => console.log(res), (err) => console.log(err)); 
        return this.httpClient.post(this.TEST_API_SERVER, formData);
    };
    PaytmService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PaytmService);
    return PaytmService;
}());
exports.PaytmService = PaytmService;
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
