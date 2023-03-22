import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()

export class UploadService{
    public url: string;

    constructor(){
        this.url = Global.url;

    }
    //Permite hacer petición AJAX clásica en la cual adjunta un archivo para subir
    makeFileRequest(url:string, params: Array<string>, files: Array<File>, name: string){
        return new Promise(function(resolve, reject){
            /*Define una petición AJAX para subir archivos, para eso se necesita simular un formulario clásico
            así que se crea la siguiente variable */
            var formData:any = new FormData(); //Permite crear una especie de formulario en un objeto

            var xhr = new XMLHttpRequest;/*xhr es un sinónimo de AJAX y contiene ese objeto XMLHttpRequest,
            que es el clásico objeto de peticiones asíncronas que siempre ha tenido JS */

            //Recorrer el array de archivos que puede estar llegando

            for (var i = 0; i<files.length; i++){
                formData.append(name, files[i], files[i].name);/*Recorre todos los ficheros que vayan llegando 
                y adjuntarlos al formulario con el nombre y luego añadir el archivo y recoger su nombre; es decir
                que adjunta los archivos*/

            }
            //Hacer la petición AJAX cuando haya algún cambio:
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4){//==4 son valores que se pasan así y ya
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));

                    }else{
                        reject(xhr.response);

                    }

                }

            };
            
            xhr.open('POST', url, true);
            xhr.send(formData);

        });

    }

}