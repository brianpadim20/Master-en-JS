import { Component, OnInit } from "@angular/core";
import { zapato } from "../models/zapato";//se pone dos puntos para indicar que es en la carpeta anterior
import { zapatoService } from "../service/zapato.service";

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html',
    providers:[zapatoService]
    
})export class zapatosComponent implements OnInit{
    public titulo:string = "Componente de Zapatos";
    public zapatos: Array<zapato>;
    public marcas : string[];
    public color:string;
    public miMarca:string;

    constructor(private _zapatoService: zapatoService){
        this.zapatos=this._zapatoService.getZapatos();
        this.miMarca="";
        this.color = 'blue';
        this.marcas = new Array();
        /*this.zapatos = [
            new zapato('Reebok classic',850000,'Reebok', 'Negro',true),
            new zapato('Nike SB',450000,'Nike', 'Blanco',false),
            new zapato('Adidas Yezzy',650000,'Adidas', 'Gris',true),
            new zapato('Nike airmax',950000,'Nike', 'Rojo',true),
            new zapato('Adidas running',350000,'Adidas', 'Azul',false),
            new zapato('Vans on the road',325000,'Vans', 'Negro',true)
        ];
        
        Este objeto se comenta porque se importó desde el servicio de Zapatos

        */

    }ngOnInit(){
        //console.log(this.zapatos);
        this.getMarcas();
        this.zapatos;
        console.log(this._zapatoService.getTexto());

        
    }getMarcas(){
        this.zapatos.forEach((zapato)=>{
            if(this.marcas.indexOf(zapato.marca) < 0){
                this.marcas.push(zapato.marca);

            }

        });
        console.log(this.marcas);

    }getMarca(){
        alert(this.miMarca);

    }addMarca(){
        if(this.marcas.indexOf(this.miMarca) < 0){
            this.marcas.push(this.miMarca);

        }

    //Función para el evento click Evento click 
    }borrarMarca(index:any){//Si sale Parameter 'index' implicitly has an 'any' type, solo poner :any y se 
        //soluciona
        //delete this.marcas[indice];
        this.marcas.splice(index, 1);/** .splice pide a partir de qué indice voy a borrar y a partir
        de ese índice, cuantos elementos borrar, si se pone mas de uno, borrará más de un elemento a
        partir del índice indicado */

    }onBlur(){
        console.log("Has salido del input");

    }mostrarPalabra(){
        alert(this.miMarca);
        
    }

}