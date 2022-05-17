//Clase (Molde del objeto, lleva el nombre del fichero)
class Camiseta{
    //Propiedades (Características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;


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
    public setColor(color){
        this.color=color;

    }public getColor(){
        return this.color;

    }public setModelo(modelo){
        this.modelo = modelo;

    }public getModelo(){
        return this.modelo;

    }public setMarca(marca){
        this.marca = marca;

    }public getMarca(){
        return this.marca;

    }

}

