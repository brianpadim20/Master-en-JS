import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class PeticionesService{
    public url:string;

    constructor(public _http: HttpClient){
        this.url="https://reqres.in";

    }getUser(userID:any):Observable<any>{
        return this._http.get(this.url+'/api/users/'+userID);/**Retorna el método http creado, con la URL
        indicada dentro de comillas que es la petición a la API Rest, con esto se hace una petición AJAX por
        HTTP */

        //El userID se pone como parámetro para saber cual usuario se desea mostrar

    }addUser(user:any):Observable<any>{
        let params=JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-type','application/json');

        return this._http.post(this.url+'api/users', params, {headers:headers});

    }

}