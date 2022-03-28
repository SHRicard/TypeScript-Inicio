export {};
// <tipo> //Angel brackets syntax 

let userName : any;
userName = "ricardo"
//tenemos una cadena, TS confia en mi!

// let message: string = (<string>userName).length > 5 ? "Hola " + userName : "Hola desconocido";

// console.log(message);


let unserNameWithId: any = "Milo 1"
//como optener el userName 

userName = (<string>unserNameWithId).substring(10);
console.log(userName);


// Sintax "as"
let message = (userName as string).length > 5 ? "Hola " + userName : "Hola desconocido";

console.log(message);


let helloUser: any ;
helloUser = "Hola Ricardo";
userName =(helloUser as string).substring(5);
console.log(userName);