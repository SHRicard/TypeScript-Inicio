//10 , "10"
export{};

let idUser:IdUser;
idUser = 10;
idUser = '10';
// buscar userName dado un ID

function getUserNameById(id:IdUser): UserName {
    //logica de negocio
    return  "Ricado "
}


getUserNameById(20);
getUserNameById("20");


//TypeScript
type IdUser = number | string;
type UserName = string;

// Tipo literales
// 100x100px, 500x500px, 1000x1000px

type SquareSize = '100x100' | '500x500' | '1000x1000';

let smallPicture : SquareSize = '100x100';
let mediumPicture : SquareSize = '500x500';

