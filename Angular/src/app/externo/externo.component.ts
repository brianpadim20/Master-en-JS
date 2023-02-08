import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit{

  public user:any;
  public userID:any;
  public fecha: any;

  public new_user:any;
  public usuarioGuardado:any;

  constructor(
    private _PeticionesService:PeticionesService
  ){
    this.userID=1;
    this.new_user = {
      "name": "",
      "job": ""

    };

  }

  ngOnInit(){
    this.cargaUsuario();
    this.fecha = new Date();
  
  }cargaUsuario(){
    this.user=false;
    this._PeticionesService.getUser(this.userID).subscribe(
      response=>{
        console.log(response);
        this.user = response.data;
        this.usuarioGuardado=response;

      },
      error=>{
        console.log(<any>error);

      }

    ); 

  }/*onSubmit(form:any){
    this._PeticionesService.addUser(this.new_user).subscribe(
      Response=>{
        console.log(Response);

        form.reset();

      },error=>{
        console.log(<any>error);

      }
    );

  };*/

}
