console.log('Hello TypeScript Ricardo !');


//Numbre
//Explicito 
let phone :number;
phone= 1;
// la variable phone solo acepta valor  number


let hex: number = 0xf00d; // valor en hexadecimal
let binary:number = 0b1010; // valor en binary
let octal:number = 0o744; // valor en octal


//tipo : boolean 
//Tipado explicito
 let isPro: boolean ;
 isPro = true; // la variable isPro solo acepta valor true

 //inferido

 let isUserPro = false;
 isUserPro = true;

 //Tipo String

 let userName: string = 'Ricardo';
userName = 'Ramirez'; // userName solo acepta valor string

// Template String 
//Uso de back-tick ``

let userInfo : string
userInfo = `
    user Info :
    userName: ${userName}
    firsttName: ${userName + `Ramirez`}
    phone: ${phone}
    isPro: ${isPro}
    
    `;
    console.log(`userInfo`, userInfo);


