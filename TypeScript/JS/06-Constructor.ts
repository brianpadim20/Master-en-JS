//Clase (Molde del objeto, lleva el nombre del fichero)
class Camiseta{
    //Propiedades (Características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;


    //Métodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }


}var camiseta = new Camiseta("rojo", "Manga larga","Nike");
console.log(camiseta);

