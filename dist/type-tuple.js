"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, "ricardo"] 2 valores 
let user;
user = [1, 'ricardo'];
console.log(user);
console.log(user[0]);
console.log(user[1].length);
// tuplas con varios valores
// id , userName , isPro
let userInfo;
userInfo = [4, 'Ramirez', false];
console.log(userInfo);
//array de tuplas
let array = [];
array.push([1, 'ricardo']);
array.push([2, 'Milo']);
array.push([3, 'Ana']);
array.push([4, 'Chachi']);
console.log(array);
//Uso de function Array
//Editar un valor del array
array[2][1] = array[2][1].concat('001');
console.log(array);
