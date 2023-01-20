import { Component, OnInit } from "@angular/core";
import { zapato } from "../models/zapato";//se pone dos puntos para indicar que es en la carpeta anterior

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html'
    
})export class zapatosComponent implements OnInit{
    public titulo:string = "Componente de Zapatos";
    public zapatos: Array<zapato>;
    public marcas : string[];
    public color:string;

    constructor(){
        this.color = 'blue';
        this.marcas = new Array();
        this.zapatos = [
            new zapato('Reebok classic',850000,'Reebok', 'Negro',true),
            new zapato('Nike SB',450000,'Nike', 'Blanco',false),
            new zapato('Adidas Yezzy',650000,'adidas', 'Gris',true),
            new zapato('Nike airmax',950000,'Nike', 'Rojo',true),
            new zapato('Adidas running',350000,'Adidas', 'Azul',false)
        ];

    }ngOnInit(){
        console.log(this.zapatos);
        this.getMarcas
        
    }getMarcas(){
        this.zapatos.forEach((zapato,index)=>{
            if(this.marcas.indexOf(zapato.marca) < 0){
                this.marcas.push(zapato.marca);

            }

        });
        console.log(this.marcas);
    }

}