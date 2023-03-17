import { Component, OnInit } from '@angular/core';

//Importo los modelos creados
import { Project } from 'src/app/models/project';

//Importo los servicios creados
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  //Cargo los servicios dentro de la propiedad providers en el decorador
  providers:[ProjectService]
})
export class CreateComponent {
  public title: string;
  public project: Project

  constructor(
    private _projectService: ProjectService //propiedad del servicio
  ){
    this.title="Crear proyecto";
    this.project = new Project('','','','',2023,'','')//4 cambpos vacíos, 2023, 2 campos vacíos
  }

  ngOnInit(){}

  onSubmit(){
    
    
  }

}
