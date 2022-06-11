import { Component } from "@angular/core";
import { Zapato } from "../Models/Zapato";
@Component({
    selector:'zapatos',
    templateUrl: './zapatos.component.html'

})
export class zapatosComponent{
    public titulo: string;
    public zapatos: Array<Zapato>;

    constructor(){
        this.titulo = "Componente de zapatos";
        this.zapatos=[
            new Zapato('Nike Airmax', 650000,'Nike', 'Rojo', true),
            new Zapato('Reebok classic', 250000,'Reebok', 'Blanco', true),
            new Zapato('Nike SB', 450000,'Nike', 'Negro', false),
            new Zapato('Adidas Running', 350000,'Adidas', 'Gris', true)
        ]
        
        }ngOnInit(){
        console.log(this.zapatos)

    }

}