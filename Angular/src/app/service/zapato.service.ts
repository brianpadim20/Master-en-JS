import { Injectable } from "@angular/core";
import { zapato } from "../models/zapato";

@Injectable()

export class zapatoService{
    public zapatos: Array<zapato>;

    constructor(){
        this.zapatos = [
            new zapato('Reebok classic',850000,'Reebok', 'Negro',true),
            new zapato('Nike SB',450000,'Nike', 'Blanco',false),
            new zapato('Adidas Yezzy',650000,'Adidas', 'Gris',true),
            new zapato('Nike airmax',950000,'Nike', 'Rojo',true),
            new zapato('Adidas running',350000,'Adidas', 'Azul',false),
            new zapato('Vans on the road',325000,'Vans', 'Negro',true),
            new zapato('OP Classic',190000,'OP','rojo',true)
        ];

    }getZapatos():Array<zapato>{//Se le dice que va a devolver un array de objetos del tipo zapato
        return this.zapatos;

    }getTexto(){
        return "hola mundo desde un servicio";

    }

}