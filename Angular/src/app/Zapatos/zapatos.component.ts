import { Component } from "@angular/core";
import { Zapato } from "../Models/Zapato";
@Component({
    selector:'zapatos',
    templateUrl: './zapatos.component.html'

})
export class zapatosComponent{
    public titulo: string;
    public zapatos: Array<Zapato>;
    public Marcas: string[];
    public color: string;
    public miMarca: string;

    constructor(){
        this.miMarca = 'Fila';
        this.color = '';
        this.Marcas = new Array();
        this.titulo = "Componente de zapatos";
        this.zapatos=[
            new Zapato('Nike Airmax', 650000,'Nike', 'red', true),
            new Zapato('Reebok classic', 250000,'Reebok', 'yellow', true),
            new Zapato('Nike SB', 450000,'Nike', 'black', false),
            new Zapato('Adidas Running', 350000,'Adidas', 'blue', true)
        ]
        
        }ngOnInit(){
        console.log(this.zapatos)
        

    }getMarcas(){
        this.zapatos.forEach((zapato, index)=>{
            if(this.Marcas.indexOf(zapato.marca)<0){
                this.Marcas.push(zapato.marca);
                console.log(index);
            }
            
            
        });
        console.log(this.Marcas )
    }

    getMarca(){
        alert(this.miMarca);
    }

    addMarca(){
        this.Marcas.push(this.miMarca);
    }

}