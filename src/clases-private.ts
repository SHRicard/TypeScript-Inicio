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
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;


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
    private title: string;
 picture: Picture[];

}

const album : Albut = new Albut(1, 'title');
const picture: Picture = new Picture(1, 'title2 ', PhotoOrientation.Landscape);
album.addPicture(picture)

console.log(album);


// accediendo a los mientros private

// picture.id = 120; // deja de ser public y pasa a privado con el atributo "___private__"
// picture.title = 'Ricardo Ramirez';// deja de ser public y pasa a privado con el atributo "___private__"
// album.title = 'Personal Activities';// deja de ser public y pasa a privado con el atributo "___private__"
// console.log(album);
