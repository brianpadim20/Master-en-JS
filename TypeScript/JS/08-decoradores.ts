interface CamisetasBase{
    setColor (color);
    getColor();
    setModelo(modelo);
    getModelo();
    setMarca(marca);
    getMarca();
}//Decorador
function estampar(logo:string){
    //Retorna una función anónima cuyo parámetro será target y esta será una función
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

//Clase (Molde del objeto, lleva el nombre del fichero)
@estampar('Gucci')
class Camisetas2 implements CamisetasBase{
    //Propiedades (Características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;

    constructor(color, modelo, marca){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }

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

}//clase hija
class busos extends Camisetas{
    public capucha: boolean;
    
    setCapucha(capucha:boolean){
        this.capucha = capucha;

    }getCapucha():boolean{
        return this.capucha
    }
}

var camiseta = new Camisetas("Rojo","Manga larga","Adidas");
console.log(camiseta);
camiseta.estampacion();

var Buso = new busos("Rojo", "Manga larga","nike"); //También se puede dejar en blanco los parámetros
Buso.setCapucha(true);
Buso.setColor("Verde");
console.log(Buso);  