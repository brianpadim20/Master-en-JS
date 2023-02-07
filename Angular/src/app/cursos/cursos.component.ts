import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  public nombre: string;
  public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    
  ){
    this.nombre='';
    this.followers=0;
  }

  ngOnInit(){
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params['nombre'];
      this.followers= +params['followers'];
      console.log(params);
      console.log(this.nombre);
      
      //Ejemplo de redireccionamiento 
      if(this.nombre=="ninguno"){
        this._router.navigate(['/home']);
      }


    })//Recoge el parámetro por la URL

  }redirigirzapatos(){
    this._router.navigate(['/zapatos']);
  }

}
