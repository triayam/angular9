import { Component, OnInit , Input , ElementRef, ViewChild  } from '@angular/core';
import { Route, Router , NavigationExtras } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map , first , defaultIfEmpty , tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject, Subscriber , of } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-pay-tm-test',
  templateUrl:'./pay-tm-test.component.html',
  
  styleUrls: ['./pay-tm-test.component.scss']
})
export class PayTmTestComponent implements OnInit {

 @Input() public  payparams  : Object[] = [];

@Input() public  paytmParams  : any ;
 @ViewChild("myIFrame") payIframe : ElementRef;
public mssg; 
public response;
  constructor(public router: Router , private httpClient: HttpClient, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  
    //localStorage.setItem("paytmParams", JSON.stringify(this.paytmParams));
     this.paytmParams = JSON.parse(sessionStorage.getItem('userData'));
  
   var json = 'JsonData='+JSON.stringify(this.paytmParams); 
   console.log(' formData '+ json);
  
   const headers = { 
  'Accept': 'text/html, application/xhtml+xml, */*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const requestOptions = {    
       headers: new HttpHeaders(headers), 
    };
  
  
     this.httpClient.post<any>('http://localhost:8080/', json , requestOptions)
     .subscribe({
        next: data => { this.response = data;
                 this.mssg = this.domSanitizer.bypassSecurityTrustHtml(data);
               this.payIframe.nativeElement.src='data:text/html;charset=utf-8,' + encodeURI(this.mssg);
              } , 
        error: error => { console.error('There was an error!', error); this.response = 'There was an error!';
                 console.log('error.text '+error.error.text );
                 this.mssg = this.domSanitizer.bypassSecurityTrustHtml(error.error.text);
                 // this.payIframe.nativeElement.contentWindow.document = this.mssg;
                 // this.payIframe.nativeElement.src='data:text/html;charset=utf-8,' + encodeURI(this.mssg);
           }
        })
  
  }
  
  

}
