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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function estampar(logo) {
    //Retorna una función anónima cuyo parámetro será target y esta será una función
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//Clase (Molde del objeto, lleva el nombre del fichero)
var Camisetas2 = /** @class */ (function () {
    function Camisetas2(color, modelo, marca) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }
    Camisetas2.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisetas2.prototype.getColor = function () {
        return this.color;
    };
    Camisetas2.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camisetas2.prototype.getModelo = function () {
        return this.modelo;
    };
    Camisetas2.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camisetas2.prototype.getMarca = function () {
        return this.marca;
    };
    Camisetas2 = __decorate([
        estampar('Gucci')
    ], Camisetas2);
    return Camisetas2;
}()); //clase hija
var busos = /** @class */ (function (_super) {
    __extends(busos, _super);
    function busos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    busos.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    busos.prototype.getCapucha = function () {
        return this.capucha;
    };
    return busos;
}(Camisetas));
var camiseta = new Camisetas("Rojo", "Manga larga", "Adidas");
console.log(camiseta);
camiseta.estampacion();
var Buso = new busos("Rojo", "Manga larga", "nike"); //También se puede dejar en blanco los parámetros
Buso.setCapucha(true);
Buso.setColor("Verde");
console.log(Buso);
