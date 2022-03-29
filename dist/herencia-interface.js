"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const abul = {
    id: 23,
    title: 'test',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
};
const picture = {
    id: 1,
    title: 'Test',
    orientation: PhotoOrientation.Landscape
};
let newPicture = {};
newPicture.id = 12;
newPicture.title = 'Dota2';
newPicture.orientation = PhotoOrientation.Square;
console.log(abul);
console.log(newPicture);
