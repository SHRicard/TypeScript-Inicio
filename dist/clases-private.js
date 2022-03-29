"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento 
    toString() {
        return `[id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation}]`;
    }
}
class Albut {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.picture = [];
    }
    addPicture(picture) {
        this.picture.push(picture);
    }
}
const album = new Albut(1, 'title');
const picture = new Picture(1, 'title2 ', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log(album);
// accediendo a los mientros private
// picture.id = 120; // deja de ser public y pasa a privado con el atributo "___private__"
// picture.title = 'Ricardo Ramirez';// deja de ser public y pasa a privado con el atributo "___private__"
// album.title = 'Personal Activities';// deja de ser public y pasa a privado con el atributo "___private__"
// console.log(album);
