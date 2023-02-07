import { Component, OnInit } from '@angular/core';
import { contactoUsuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: contactoUsuario

  constructor(){
    this.usuario=new contactoUsuario('','','','');//Se dejan estos campos vacíos para luego llenar con formulario
    

  }ngOnInit() {
      
  }onSubmit(form:any){
    
    //console.log("Evento submit ejecutado");
    console.log(this.usuario);
    form.reset();

  }

}
