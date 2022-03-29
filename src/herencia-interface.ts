export {};


enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//herencia de interface

interface  Entity{
    id: number;
    title: string;


}


///////------/////////
interface Albut extends Entity{

//copia de los atributos de Entity hereda id y title


description: string;
}

interface Picture extends Entity{
//copia de los atributos de Entity hereda id y title
 

    orientation: PhotoOrientation;

}

const abul: Albut = {
id:23,
title: 'test',
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

}

const picture: Picture = {
    id: 1,
    title: 'Test',
    orientation: PhotoOrientation.Landscape

}

let newPicture = {} as Picture;

newPicture.id = 12;
newPicture.title = 'Dota2';
newPicture.orientation = PhotoOrientation.Square;

console.log(abul);
console.log(newPicture);
