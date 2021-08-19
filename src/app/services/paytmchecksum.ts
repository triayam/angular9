import * as CryptoJS from 'crypto-js';



// https://stackoverflow.com/questions/50000746/encrypting-in-angular-and-decrypt-on-c-sharp
// https://www.phpflow.com/misc/angular/encryption-decryption-using-crypto-js-in-angularjs/

export class Paytmchecksum { 

encryptSecretKey: string = '!AlG9%OnEGCAzlBs';
iv: string = '@@@@&&&&####$$$$';
salt: any = CryptoJS.lib.WordArray.random(16);

  constructor() {

  }
    
  public encryptData(data) {
   console.log( ' encry data '+ data);
  try {
    var encrypted = CryptoJS.AES.encrypt(data, this.encryptSecretKey, { 
            iv: this.iv, 
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC        
          });
     console.log( ' encrypted '+ encrypted.ciphertext);  
     console.log(' this.salt  ' + this.salt.toString().concat(this.iv));
     console.log(' salt iv ' + this.salt.toString().concat(this.iv).concat(encrypted.ciphertext));
     var words = CryptoJS.enc.Utf8.parse(this.salt.toString().concat(this.iv).concat(encrypted.ciphertext));
     var result = CryptoJS.enc.Base64.stringify(words);
     return result;
     //return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
  }

 public  decryptData(data) {
    /*var cipherParams = CryptoJS.lib.CipherParams.create({
                ciphertext: CryptoJS.enc.Base64.parse(data)
                });
                */
    try {
     var decrypted = CryptoJS.AES.decrypt(
                  data,
                  this.encryptSecretKey,
                  { iv: this.iv, 
                    padding: CryptoJS.pad.Pkcs7,
                    mode: CryptoJS.mode.CBC});
      var descrString = decrypted.toString(CryptoJS.enc.Utf8);
      console.log('decrypted='+descrString);
      // const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (descrString)  {
         return JSON.parse( CryptoJS.enc.Utf8.parse(descrString));
      }
      return data;
    } catch (e) {
      console.log(e);
    } 
  }
  
 public generateSignature(params, key) {
        console.log(' typeof params '  + typeof params);
		if (typeof params !== "object" && typeof params !== "string") {
			var error = "string or object expected, " + (typeof params) + " given.";
			return Promise.reject(error);
		}
		if (typeof params !== "string"){
			params = this.getStringByParams(params);
		}
		return this.generateSignatureByString(params, key);
  }
   
public async generateSignatureByString(params, key) {
		var salt =  this.generateRandomString(4);
        console.log('salt '+salt);
		return this.calculateChecksum(params, key, salt);
  }

 public  verifySignatureByString(params, key, checksum) {		
		var paytm_hash =  this.decryptData(checksum); // this.decrypt(checksum, key);
		var salt = paytm_hash.substr(paytm_hash.length - 4);
		return (paytm_hash === this.calculateHash(params, salt));
	}
  public getStringByParams(params) {
		var data = {};
		Object.keys(params).sort().forEach(function(key,value) {
            var vals = (params[key] !== null && params[key].toLowerCase() !== "null") ? params[key] : "";
            console.log('key '+key+' val ' +vals);
            
			data[key] = (params[key] !== null && params[key].toLowerCase() !== "null") ? params[key] : "";
		});
		return Object.values(data).join('|');
  }

 public  generateRandomString(length) {
 
      var words =  CryptoJS.lib.WordArray.random((length * 3.0) / 4.0);
                console.log(' words ' + JSON.stringify(words));
                 var buf  = words.words;// CryptoJS.enc.Utf8.stringify(words.words);
                 console.log(' buf ' + buf);
                  var salt = buf.toString();
                 console.log(' salt ' + JSON.stringify(salt));
      return salt;
  } 
  
	public  calculateHash(params, salt) {		
		var finalString = params + "|" + salt;
        var key128Bits = CryptoJS.PBKDF2(params + "|", salt, { keySize: 128/32 });
        
		return key128Bits;
        //crypto.createHash('sha256').update(finalString).digest('hex') + salt;
	}
	public  calculateChecksum(params, key, salt) {		
		var hashString = this.calculateHash(params, salt);
		return this.encryptData(hashString);
	}
     
}

/* 
Old functions 

 public  generateRandomString(length) {
  
    return new Promise((resolve, reject) => {
            setTimeout((error) => {
              if (error) {
                console.log("error occurred in generateRandomString: " + error);
                 reject('error'); // pass values
              } 
              else 
                {
                 var words =  CryptoJS.lib.WordArray.random((length * 3.0) / 4.0);
                 var buf  = CryptoJS.enc.Utf8.stringify(words);
                 console.log(' buf ' + buf);
                  var salt = buf.toString("base64");
                 resolve(salt); // pass values
              }
            }, 10);
        });
 } 
-----------------
.then(
                    (val) => console.log('val '+val),
                    (err) => console.error('err '+err)
                 ); // await
public  generateRandomString(length) {
  
    return new Promise((resolve, reject) => {
    
             var words =  CryptoJS.lib.WordArray.random((length * 3.0) / 4.0);
                console.log(' words ' + JSON.stringify(words));
                 var buf  = words.words;// CryptoJS.enc.Utf8.stringify(words.words);
                 console.log(' buf ' + buf);
                  var salt = buf.toString("base64");
                 console.log(' salt ' + JSON.stringify(salt));
                 resolve(salt); // pass values
           
        });
  } 




*/