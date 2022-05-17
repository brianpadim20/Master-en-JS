//Clase (Molde del objeto, lleva el nombre del fichero)
var Camiseta = /** @class */ (function () {
    //Métodos (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "Manga larga", "Nike");
console.log(camiseta);
