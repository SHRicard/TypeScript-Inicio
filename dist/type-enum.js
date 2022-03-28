"use strict";
//orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 10] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 11] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 12] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 13] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
console.log(landscape);
console.log(PhotoOrientation.Portrait);
var Country;
(function (Country) {
    Country["Argentina"] = "ARG";
    Country["Brasil"] = "BRA";
    Country["Chile"] = "CHL";
    Country["Espa\u00F1a"] = "ESP";
})(Country || (Country = {}));
const country = Country.Argentina;
console.log(country);
