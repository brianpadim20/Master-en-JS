import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { configuracion } from './Models/Configuracion'
import { Zapato } from './Models/Zapato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  public descripcion: String;
  public mostrar_videojuegos: boolean = true;
  public config;
  public zapatos: Array<Zapato>;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config=configuracion;
    this.mostrar_Videojuegos;

    this.zapatos=[
      new Zapato('Nike Airmax', 650000,'Nike', 'Rojo', true),
      new Zapato('Reebok classic', 250000,'Reebok', 'Blanco', true),
      new Zapato('Nike SB', 450000,'Nike', 'Negro', false),
      new Zapato('Adidas Running', 350000,'Adidas', 'Gris', true)
    ]
  }ngOnInit(){
    console.log(this.zapatos)

  }

  ocultar_videojuegos(){
    this.mostrar_videojuegos=false;
  }mostrar_Videojuegos(){
    this.mostrar_videojuegos=true;
    
  }
}
