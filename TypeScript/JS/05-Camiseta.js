//Clase (Molde del objeto, lleva el nombre del fichero)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    /**
     * public: Puede acceder a las propiedades y métodos desde cualquier lugar, clase actual y
     *         que hereda
     * protected: Puede acceder al atributo, método o lo que sea desde la clase que lo define o
     *            desde cualquier objeto que tenga esa misma clase
     * Private: Los atributos o métodos solamente pueden ser accesibles desde la misma clase
     *          que los define, justo desde adentro de la clase, no podría tener el seteo de pro-
     *          piedades desde otro lado
     */
    //Métodos (Funciones o acciones del objeto)
    //Interactúa con las propiedades privadas para poder trabajar con ellas
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("Rojo");
var playera = new Camiseta();
playera.setColor("Azul");
console.log(playera);
console.log(camiseta);
