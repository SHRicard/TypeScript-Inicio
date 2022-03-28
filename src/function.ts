// Crear una fotografias con js
// function createPhone(title, data , size){
// }
type SquareSize = "100x100" | "500x500" | "1000x1000";



// Usamos TS , definimos tipos para parametros
// function createPhone(title: string, data: number, size: SquareSize) {

//se crea la foto 

    // console.log(title, data, size);



// }
// createPhone("mi foto", 1, "100x100");
// createPhone("mi foto", 20); // falta 1 parametro es error en ts


function createPhone(title?: string, data?: number, size?: SquareSize) {
console.log(title, data, size);

}
 createPhone("mi foto", 1, "100x100");
 createPhone("mi foto", 20); // falta 1 parametro es error en ts
 createPhone("100x100"); // falta 1 parametro es error en ts


//flat Array Funcion

let createPic = (title?: string, date?: number, size?: SquareSize): object => {
    return {
        title,
        date,
        size
    }
}

const picture= createPic("platzi " , 1 , "100x100");
console.log(picture);

