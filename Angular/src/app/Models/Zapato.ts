export class Zapato{
    /*
    public nombre: string;
    public precio: number;
    public marca: string;
    public color: string;
    public stock: boolean;

    constructor(nombre, precio, marca, color, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.color = color;
        this.stock = stock;

    }*/
    constructor(
    public nombre: string,
    public precio: number,
    public marca: string,
    public color: string,
    public stock: boolean
    ){}
    /**Hacer el constructor de esta forma, Typescript define la propiedad de la clase y automáticamente, cuando 
     * se le pase un valor por parámetro al objeto, le asignará un valor a la propiedad.
    */
}