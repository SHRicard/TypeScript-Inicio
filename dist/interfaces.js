"use strict";
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
