<h1 align="center">
   <b>
       et-phone
    </b>
</h1>
<div align="center">Ethiopian phone number digit validation</div>
<div align="center">(incl. Safaricom Ethiopia phone)</div>

## Installing

### Package manager

Using npm:

```bash
$ npm install et-phone
```

Using yarn:

```bash
$ yarn add et-phone
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import etPhone from 'et-phone';
```

[Since the function is exported using default export, you can use any name instead of 'etPhone' as the name for the imported function.]

## Examples

<p>The default validation will include <b>mobile</b> and <b>fixed-line/ landline</b> phone numbers for Ethio-telecom and Safaricom-Ethiopia. </p

 ```js
etPhone("0911 23 45 67") 
// {isValid: true, phoneNumber: "+251911234567", provider: "Ethio telecom", phoneType: "Mobile",}
```
 ```js
etPhone("0711 23 45 67") 
// {isValid: true, phoneNumber: "+251711234567", provider: "Safaricom", phoneType: "Mobile",}
```
 ```js
etPhone("+251 911 23 45 67") 
// {isValid: true, phoneNumber: "+251911234567", provider: "Ethio telecom", phoneType: "Mobile",}
```
 ```js
etPhone("+251 711 23 45 67") 
// {isValid: true, phoneNumber: "+251711234567", provider: "Safaricom", phoneType: "Mobile",}
```
 ```js
etPhone("+(251) 911 23 45 67") 
// {isValid: true, phoneNumber: "+251911234567", provider: "Ethio telecom", phoneType: "Mobile",}
```
 ```js
etPhone("+(251) 711 23 45 67") 
// {isValid: true, phoneNumber: "+251711234567", provider: "Safaricom", phoneType: "Mobile",}
```
 ```js
etPhone("911234567") 
// {isValid: true, phoneNumber: "+251711234567", provider: "Ethio telecom", phoneType: "Mobile",}
```
 ```js
etPhone("711234567") 
// {isValid: true, phoneNumber: "+251711234567", provider: "Safaricom", phoneType: "Mobile",}
```
 ```js
etPhone(911234567) 
// {isValid: true, phoneNumber: "+251711234567", provider: "Ethio telecom", phoneType: "Mobile",}
```
 ```js
etPhone(711234567) 
// {isValid: true, phoneNumber: "+251711234567", provider: "Safaricom", phoneType: "Mobile",}
```
<br/>
<p>You can also specify specific  phone number types: ["all" | "mobile" | "fixedLine" | "special" | "shortCode"] </p

 ```js
etPhone("0911234567", ["all"]) 
// { isValid: true, phoneNumber: "+251711234567", provider: "Ethio telecom", phoneType: "Mobile" }
```
 ```js
etPhone("0911234567", ["fixedLine"]) 
// { isValid: false }
```
 ```js
etPhone("0111111234", ["fixedLine"]) 
// { isValid: true, phoneNumber: "+2519111111234", provider: "Ethio telecom", phoneType: "Fixed-line" }
```
 ```js
etPhone("0111111234", ["special", "mobile"]) 
// { isValid: false }
```
 ```js
etPhone("909", ["shortCode"]) 
// {isValid:  true, phoneNumber:  "909", provider:  "Ethio telecom", phoneType:  "Short Code" }
```
 ```js
etPhone("8004", ["special"]) 
// {isValid:  true, phoneNumber:  "8004", provider:  "Ethio telecom", phoneType:  "Special" }
```
 ```js
etPhone("0911234567", ["all"], ["ethioTelecom"]) 
// {"isValid": true, "phoneNumber": "+251911234567", "provider": "Ethio telecom", "phoneType": "Mobile"}
```
 ```js
etPhone("0911234567", ["all"], ["safaricom"]) 
// {isValid: false}
```
 ```js
etPhone("0711234567", ["all"], ["safaricom"]) 
// {isValid: true, phoneNumber: '+251711234567', provider: 'Safaricom', phoneType: 'Mobile'}
```

## Test
```
npm test
``` 

## FAQ

1.  Does `et-phone` validate the existence and activeness of the phone number?
    
No, `et-phone` does not perform validation on the existence and activeness of the phone number. Currently, `et-phone` only validates whether the digit belongs to the correct Ethiopian telecom provider and phone type. It does not verify if the phone number is currently active or whether it exists in the telecommunication network.
     
   
3. Why is `et-phone` returning an object with `isValid: false` despite the phone number being correct?

Please ensure that you provide the other parameters, such as 'phone type' and 'provider', correctly.

## Resources

-   [Documentation](https://et-phone.pages.dev/docs/)
-   [Changelog](https://github.com/eyobsamuel/et-phone/blob/master/CHANGELOG.md)
-   [Stack Overflow](https://stackoverflow.com/questions/tagged/et-phone)

## License 

`et-phone` is freely distributable under the terms of the  [MIT license](https://github.com/eyobsamuel/et-phone/blob/master/LICENSE).
    
  