//tipo arrya []

let users: string[];
users = ['Ricardo', 'Ramirez' , 'Milo'];
// users= [ 1 , true, "test" ]; //error solo acepta cadena de texto

// array<TIPO>

let pictureTitles : Array<string>;
pictureTitles = ['forest', 'mountain', 'sea'];

//aceder a los indices de un array 
 console.log( `first users`,users[2]);
console.log( "pictureTitles", pictureTitles[2]);

// Propiedades de un array 
console.log(users.length);
//uso de function en el array
users.push('ana');
users.sort();
console.log(users);

