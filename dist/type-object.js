"use strict";
//Type: object
let user;
user = {}; // Object = js 
user = {
    id: 1,
    userName: 'Ricardo',
    firstName: 'Ramirez',
    isPro: true
};
console.log(`user`, user);
//Object vs object(clase de Js vs tipo Ts)
const myObj = {
    id: 1,
    userName: 'Ricardo',
    firstName: 'Ramirez',
    isPro: true
};
const isInstance = myObj instanceof Object; //clase Object de Js
console.log(`isInstance`, isInstance);
console.log(`user.userName`, myObj.userName);
const myObj2 = {
    id: 1,
    userName: 'Ricardo',
    firstName: 'Ramirez',
    isPro: true
};
