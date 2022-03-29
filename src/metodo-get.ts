export {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}


//metodo de Get 
class Picture {
     constructor ( id: number
                ,title: string
                , orientation: PhotoOrientation){
        this._id = id;
        this._title = title;
        this._orientation = orientation;}

         get id (){return this._id;}
         set id(id: number) {this._id = id;}

         get title(){return this._title }
         set title(title: string) {this._title = title; }

         get orientation(){return this._orientation}
         set orientation(o:PhotoOrientation) {this._orientation = o;}






    //Comportamiento 
    toString(){
        return `[id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation}]`;
    }
    
    // propiedad de la entidad 
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;


}
class Albut  {
    constructor (id: number, title: string){
        this._id = id;
        this._title = title;
        this._picture = [];


    }
addPicture(picture: Picture){
    this.picture.push(picture);
}


    _id: number;
    _title: string;
    _picture: Picture[];

}

const album : Albut = new Albut(1, 'title');
const picture: Picture = new Picture(1, 'title2 ', PhotoOrientation.Landscape);
album.addPicture(picture)

console.log(album);


// accediendo a los mientros private
 console.log(album);



