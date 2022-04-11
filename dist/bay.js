"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Picture_id, _Picture_title, _Picture_orientation, _Albut_id, _Albut_title, _Albut_picture;
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`
    [title: ${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientacion}]`);
}
let myPic = {
    title: 'My Pibes',
    date: '2020',
    orientacion: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'test Title',
    date: '2020',
    orientacion: PhotoOrientation.Portrait
    // extra: 'test'
});
function generatePicture(config) {
    const pic = { title: 'Default', date: '2020' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log(picture);
picture = generatePicture({ title: 'Test' });
console.log('picture', picture);
picture = generatePicture({ date: '1991' });
console.log('picture', picture);
let user;
user = {
    id: 10,
    userName: "Ricardo",
    isPro: true
};
console.log(user);
user.userName = "Ramirez";
console.log(user);
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        // propiedad de la entidad 
        _Picture_id.set(this, void 0);
        _Picture_title.set(this, void 0);
        _Picture_orientation.set(this, void 0);
        __classPrivateFieldSet(this, _Picture_id, id, "f");
        __classPrivateFieldSet(this, _Picture_title, title, "f");
        __classPrivateFieldSet(this, _Picture_orientation, orientation, "f");
    }
    //Comportamiento 
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _Picture_id, "f")},
        title: ${__classPrivateFieldGet(this, _Picture_title, "f")},
        orientation: ${__classPrivateFieldGet(this, _Picture_orientation, "f")}]`;
    }
}
_Picture_id = new WeakMap(), _Picture_title = new WeakMap(), _Picture_orientation = new WeakMap();
class Albut {
    constructor(id, title) {
        _Albut_id.set(this, void 0);
        _Albut_title.set(this, void 0);
        _Albut_picture.set(this, void 0);
        __classPrivateFieldSet(this, _Albut_id, id, "f");
        __classPrivateFieldSet(this, _Albut_title, title, "f");
        __classPrivateFieldSet(this, _Albut_picture, [], "f");
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _Albut_picture, "f").push(picture);
    }
}
_Albut_id = new WeakMap(), _Albut_title = new WeakMap(), _Albut_picture = new WeakMap();
const album = new Albut(1, 'title');
const picture = new Picture(1, 'title2 ', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log(album);
// accediendo a los mientros private
// picture.#id = 120; // deja de ser public y pasa a privado con el atributo "___private__"
// picture.#title = 'Ricardo Ramirez';// deja de ser public y pasa a privado con el atributo "___private__"
// album.title = 'Personal Activities';// deja de ser public y pasa a privado con el atributo "___private__"
console.log(album);
