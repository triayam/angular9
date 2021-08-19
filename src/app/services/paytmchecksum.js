"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var CryptoJS = require("crypto-js");
// https://stackoverflow.com/questions/50000746/encrypting-in-angular-and-decrypt-on-c-sharp
// https://www.phpflow.com/misc/angular/encryption-decryption-using-crypto-js-in-angularjs/
var Paytmchecksum = /** @class */ (function () {
    function Paytmchecksum() {
        this.encryptSecretKey = '!AlG9%OnEGCAzlBs';
        this.iv = '@@@@&&&&####$$$$';
        this.salt = CryptoJS.lib.WordArray.random(16);
    }
    Paytmchecksum.prototype.encryptData = function (data) {
        try {
            var encrypted = CryptoJS.AES.encrypt(data, this.encryptSecretKey, {
                iv: this.iv,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC
            });
            var result = CryptoJS.enc.Base64.stringify(this.salt.concat(this.iv).concat(encrypted.ciphertext));
            return result;
            //return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
        }
        catch (e) {
            console.log(e);
        }
    };
    Paytmchecksum.prototype.decryptData = function (data) {
        var cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(data)
        });
        try {
            var decrypted = CryptoJS.AES.decrypt(cipherParams, this.encryptSecretKey, { iv: this.iv,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC });
            var descrString = decrypted.toString(CryptoJS.enc.Utf8);
            console.log('decrypted=' + descrString);
            // const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
            if (descrString) {
                return JSON.parse(descrString.toString(CryptoJS.enc.Utf8));
            }
            return data;
        }
        catch (e) {
            console.log(e);
        }
    };
    Paytmchecksum.prototype.generateSignature = function (params, key) {
        if (typeof params !== "object" && typeof params !== "string") {
            var error = "string or object expected, " + (typeof params) + " given.";
            return Promise.reject(error);
        }
        if (typeof params !== "string") {
            params = this.getStringByParams(params);
        }
        return this.generateSignatureByString(params, key);
    };
    Paytmchecksum.prototype.generateSignatureByString = function (params, key) {
        return __awaiter(this, void 0, void 0, function () {
            var salt;
            return __generator(this, function (_a) {
                salt = this.generateRandomString(4);
                console.log('salt ' + salt);
                return [2 /*return*/, this.calculateChecksum(params, key, salt)];
            });
        });
    };
    Paytmchecksum.prototype.verifySignatureByString = function (params, key, checksum) {
        var paytm_hash = this.decryptData(checksum); // this.decrypt(checksum, key);
        var salt = paytm_hash.substr(paytm_hash.length - 4);
        return (paytm_hash === this.calculateHash(params, salt));
    };
    Paytmchecksum.prototype.getStringByParams = function (params) {
        var data = {};
        Object.keys(params).sort().forEach(function (key, value) {
            data[key] = (params[key] !== null && params[key].toLowerCase() !== "null") ? params[key] : "";
        });
        return Object.values(data).join('|');
    };
    Paytmchecksum.prototype.generateRandomString = function (length) {
        var words = CryptoJS.lib.WordArray.random((length * 3.0) / 4.0);
        console.log(' words ' + JSON.stringify(words));
        var buf = words.words; // CryptoJS.enc.Utf8.stringify(words.words);
        console.log(' buf ' + buf);
        var salt = buf.toString("base64");
        console.log(' salt ' + JSON.stringify(salt));
        return salt;
    };
    Paytmchecksum.prototype.calculateHash = function (params, salt) {
        var finalString = params + "|" + salt;
        var key128Bits = CryptoJS.PBKDF2(params + "|", salt, { keySize: 128 / 32 });
        return key128Bits;
        //crypto.createHash('sha256').update(finalString).digest('hex') + salt;
    };
    Paytmchecksum.prototype.calculateChecksum = function (params, key, salt) {
        var hashString = this.calculateHash(params, salt);
        return this.encryptData(hashString);
    };
    return Paytmchecksum;
}());
exports.Paytmchecksum = Paytmchecksum;
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
