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





