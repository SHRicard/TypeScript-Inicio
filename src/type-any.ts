// Tipo explicito
let idUser: any
idUser = 1; // tipo de dato number
idUser = '1'; // tipo de dato string
//la variable idUser que tiene valor any puede aceptar cualquier tipo de datoclg
console.log(`idUser`, idUser);

//Tipo inferido
let otherId
otherId = 1;
otherId= '1';
console.log(`otherId`, otherId);


 let surprise: any = 'Hello TypeScript Ricardo';

// Funcion substring : solo ba a imprimer del caracter 6 en adelante(ignora del 0 a 6 y imprime)
// surprise.sayHello(); //error
const res =  surprise.substring(6)
console.log(`res`, res);