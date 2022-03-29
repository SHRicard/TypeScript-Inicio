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
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento 
    toString(){
        return `[id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation}]`;
    }
    
    // propiedad de la entidad 
   public id: number;
    public title: string;
    public orientation: PhotoOrientation;


}
class Albut  {
    constructor (id: number, title: string){
        this.id = id;
        this.title = title;
        this.picture = [];


    }
addPicture(picture: Picture){
    this.picture.push(picture);
}


    id: number;
title: string;
picture: Picture[];

}

const album : Albut = new Albut(1, 'title');
const picture: Picture = new Picture(1, 'title2 ', PhotoOrientation.Landscape);
album.addPicture(picture)

console.log(album);


// accediendo a los mientros publico

picture.id = 120; // public
picture.title = 'Ricardo Ramirez';// public
album.title = 'Personal Activities';
console.log(album);

















