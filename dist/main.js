"use strict";
console.log('Hello TypeScript Ricardo !');
//Numbre
//Explicito 
let phone;
phone = 1;
// la variable phone solo acepta valor  number
let hex = 0xf00d; // valor en hexadecimal
let binary = 0b1010; // valor en binary
let octal = 0o744; // valor en octal
//tipo : boolean 
//Tipado explicito
let isPro;
isPro = true; // la variable isPro solo acepta valor true
//inferido
let isUserPro = false;
isUserPro = true;
//Tipo String
let userName = 'Ricardo';
userName = 'Ramirez'; // userName solo acepta valor string
// Template String 
//Uso de back-tick ``
let userInfo;
userInfo = `
    user Info :
    userName: ${userName}
    firsttName: ${userName + `Ramirez`}
    phone: ${phone}
    isPro: ${isPro}
    
    `;
console.log(`userInfo`, userInfo);
