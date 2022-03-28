"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> //Angel brackets syntax 
let userName;
userName = "ricardo";
//tenemos una cadena, TS confia en mi!
// let message: string = (<string>userName).length > 5 ? "Hola " + userName : "Hola desconocido";
// console.log(message);
let unserNameWithId = "Milo 1";
//como optener el userName 
userName = unserNameWithId.substring(10);
console.log(userName);
// Sintax "as"
let message = userName.length > 5 ? "Hola " + userName : "Hola desconocido";
console.log(message);
let helloUser;
helloUser = "Hola Ricardo";
userName = helloUser.substring(5);
console.log(userName);
