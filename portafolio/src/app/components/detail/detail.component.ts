import { Component, OnInit } from '@angular/core';
//Importo los modelos creados
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/Services/global';

//Importo los servicios creados
import { ProjectService } from 'src/app/Services/project.service';
import { UploadService } from 'src/app/Services/upload.service';

//Componentes del router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent {
  public url:string;
  public project:Project;

  constructor(
    private _projectService:ProjectService,
    //Componentes del router:
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.url = Global.url;
    this.project=new Project("","","","",0,"","");
  }

  ngOnInit(){
    //Recoger los parámetros que llegan por la url (subscribe)
    this._route.params.subscribe(params=>{
      let id = params['id'];

      //Llamo al método getProject y le paso el id por parámetro
      this.getProject(id);
    })
  }/*Se invoca al método creado getProject en los servicos que hace una petició AJAX al backend
Para esto se recoge el id por la URL que llega, para esto se importan los compónentes del router
para recoger el id por la url que llega*/
getProject(id:any){
  this._projectService.getProject(id).subscribe({
    next: (response)=>{
      this.project = response.project;
      
    },
    error:(err)=>{
      console.log(err);
    }

  });

}

}
