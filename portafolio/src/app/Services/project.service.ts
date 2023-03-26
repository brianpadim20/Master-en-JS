import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()

export class ProjectService{
    //Propiedad para guardar la url de la api
    public url: string;

    constructor(
        private _http:HttpClient //cargo el httpclient como propiedad privada
    ){
        //Valor a la url dado en la variable del archivo global
        this.url = Global.url;

    }testService(){
        return 'Probando el servicio de Angular'

    }saveProject(project:Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-project', params, {headers:headers});

    }getProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'projects', {headers:headers});

    }//Crear el método getProject, se pasa como parámetro un id para buscar en la base de datos
    getProject(id:any):Observable<any>{
        /*A la variable headers se le establece un tipo de contenido y se le manda como un objeto JSON */
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        //Se hace una petición por get, se le pasa la url de la api y al segmento de la ruta que es project
        return this._http.get(this.url+ 'project/'+id,{headers:headers});

    }

}