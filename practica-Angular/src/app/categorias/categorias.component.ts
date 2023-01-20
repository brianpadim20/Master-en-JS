import { Component } from '@angular/core';
import { categoria } from '../models/categoria';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  public categorias: Array<categoria>;
  public titulo: string;

  constructor(){
    this.titulo="Categorías"
    this.categorias=[
      new categoria('Promociones'),
      new categoria('Restaurantes'),
      new categoria('Mercados'),
      new categoria('Farmacia'),
      new categoria('Licores')

    ]
  }

}
