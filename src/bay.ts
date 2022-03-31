//Funcion para mostrar la foto
export {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
interface Picture {

    title: string;
    date:string;
    orientacion:PhotoOrientation

}





function showPicture(picture: Picture){
console.log(`
    [title: ${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientacion}]`);
}
let myPic = {
    title: 'My Pibes',
    date: '2020',
    orientacion: PhotoOrientation.Landscape
}
showPicture(myPic);
showPicture({
    title: 'test Title',
    date: '2020',
    orientacion: PhotoOrientation.Portrait
    // extra: 'test'
})

interface PictureConfig{
title?: string;
date?: string;
orientacion?: PhotoOrientation;

}

function generatePicture(config: PictureConfig){
  const pic = { title : 'Default', date: '2020'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }
return  pic;
}

let  picture = generatePicture({});
console.log(picture);
  picture = generatePicture({title: 'Test'});
  console.log('picture', picture);
  picture = generatePicture({date: '1991'});
  console.log('picture', picture);

//Intefaz : Userio

interface User{
   readonly id : number; // readonly es un atributo de solo lectura
    userName: string;
    isPro: boolean;
}

let user : User;
user = {
    id : 10,
    userName:"Ricardo",
    isPro: true
}
console.log(user);
user.userName = "Ramirez"

console.log(user);

export {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}



class Picture {
     constructor ( id: number
                ,title: string
                , orientation: PhotoOrientation){
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }
    //Comportamiento 
    toString(){
        return `[id: ${this.#id},
        title: ${this.#title},
        orientation: ${this.#orientation}]`;
    }
    
    // propiedad de la entidad 
     #id: number;
     #title: string;
     #orientation: PhotoOrientation;


}
class Albut  {
    constructor (id: number, title: string){
        this.#id = id;
        this.#title = title;
        this.#picture = [];


    }
addPicture(picture: Picture){
    this.#picture.push(picture);
}


    #id: number;
     #title: string;
 #picture: Picture[];

}

const album : Albut = new Albut(1, 'title');
const picture: Picture = new Picture(1, 'title2 ', PhotoOrientation.Landscape);
album.addPicture(picture)

console.log(album);


// accediendo a los mientros private

// picture.#id = 120; // deja de ser public y pasa a privado con el atributo "___private__"
// picture.#title = 'Ricardo Ramirez';// deja de ser public y pasa a privado con el atributo "___private__"
// album.title = 'Personal Activities';// deja de ser public y pasa a privado con el atributo "___private__"
console.log(album);