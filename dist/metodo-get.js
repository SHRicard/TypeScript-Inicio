"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//metodo de Get 
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get title() { return this._title; }
    set title(title) { this._title = title; }
    get orientation() { return this._orientation; }
    set orientation(o) { this._orientation = o; }
    //Comportamiento 
    toString() {
        return `[id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation}]`;
    }
}
class Albut {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this._picture = [];
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get title() { return this._title; }
    set title(title) { this._title = title; }
    get picture() { return this._picture; }
    set picture(o) { this._picture = o; }
    addPicture(picture) {
        this.picture.push(picture);
    }
}
const album = new Albut(1, 'title');
const picture = new Picture(1, 'title2 ', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log(album);
// accediendo a los mientros private
picture.id = 120; // deja de ser public y pasa a privado con el atributo "___private__"
picture.title = 'Ricardo Ramirez'; // deja de ser public y pasa a privado con el atributo "___private__"
album.title = 'Personal Activities'; // deja de ser public y pasa a privado con el atributo "___private__"
console.log(album);
console.log(album);
