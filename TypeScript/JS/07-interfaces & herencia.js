var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clase (Molde del objeto, lleva el nombre del fichero)
var Camisetas = /** @class */ (function () {
    function Camisetas(color, modelo, marca) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }
    Camisetas.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisetas.prototype.getColor = function () {
        return this.color;
    };
    Camisetas.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camisetas.prototype.getModelo = function () {
        return this.modelo;
    };
    Camisetas.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camisetas.prototype.getMarca = function () {
        return this.marca;
    };
    return Camisetas;
}()); //clase hija
var buso = /** @class */ (function (_super) {
    __extends(buso, _super);
    function buso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    buso.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    buso.prototype.getCapucha = function () {
        return this.capucha;
    };
    return buso;
}(Camisetas));
var camiseta = new Camisetas("Rojo", "Manga larga", "Adidas");
console.log(camiseta);
var Buso = new buso("Rojo", "Manga larga", "nike"); //También se puede dejar en blanco los parámetros
Buso.setCapucha(true);
Buso.setColor("Verde");
console.log(Buso);
