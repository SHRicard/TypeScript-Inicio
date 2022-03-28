"use strict";
// Usamos TS , definimos tipos para parametros
// function createPhone(title: string, data: number, size: SquareSize) {
//se crea la foto 
// console.log(title, data, size);
// }
// createPhone("mi foto", 1, "100x100");
// createPhone("mi foto", 20); // falta 1 parametro es error en ts
function createPhone(title, data, size) {
    console.log(title, data, size);
}
createPhone("mi foto", 1, "100x100");
createPhone("mi foto", 20); // falta 1 parametro es error en ts
createPhone("100x100"); // falta 1 parametro es error en ts
//flat Array Funcion
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size
    };
};
const picture = createPic("platzi ", 1, "100x100");
console.log(picture);
