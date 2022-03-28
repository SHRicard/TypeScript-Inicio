// Tipo void

//tipo explicito
function showInfo(user: any ): any {
    console.log(`User Info: `, user.id, user.userName , user.firstName);

//  return `hola`;
}
showInfo({
id: 1,
userName: 'Ricardo',
firstName: 'Ramirez'


})


//tipo inferido 
function showFormattedInfo ( user : any) {

console.log(`User Info`, 
`id: ${user.id}
userName: ${user.userName}
firstName: ${user.firstName}`);


}
showFormattedInfo({
    id: 1,
    userName: 'Ricardo',
    firstName: 'Ramirez',
})




//tipo vaoid , como tipo de dato 

let unusable : void ;
unusable = undefined;
// unusable = null;

// Tipo : Never 

function handelError (code : number , message : string) : never{
// proceso de dato  en mi codigo 
// Generamos el  mensaje de error 
throw new Error(`${message}. Code: ${code}`);
}
try {
    handelError(404, 'Not Found');

} catch(error){}





function sumNumers(limit: number) : never{
let sum = 0;
while(true){
    sum ++;
}
//return sum;
}

sumNumers(10);
//ciclo infinito