'use strict'

/**
 * Crear un formulario con 3 campos: nombres, apellidos y edad
 * Añadir un botón que use un evento de submit
 * Mostrar los datos por pantalla
 * Validación del formulario
 */

window.addEventListener('load', ()=>{
    var formulario= document.querySelector("#formulario");
    var boxdashed = document.querySelector(".dashed");

    boxdashed.style.display ="none";

    formulario.addEventListener('submit', ()=>{
        console.log("Evento submit capturado");

        var nombre=document.querySelector("#nombre").value;
        var apellido=document.querySelector("#apellido").value;
        var edad= parseInt(document.querySelector("#edad").value); 
/*
        VALIDACIÓN POR FUERA DEL FORMULARIO EN HTML

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert ("El nombre no es válido");
            return false;

        }if(apellido.trim() == null || apellido.trim().length == 0){
            alert ("Los apellidos no son válidos");
            return false;

        }if(edad==null || edad<=0 ||isNaN(edad)){
            alert("La edad ingresada no es válida");
            return false;
        }
*/
        boxdashed.style.display ="block";

        var datosUsuario =[nombre, apellido, edad]; 
        
        
        
        for(var dato in datosUsuario){
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[dato]);
            boxdashed.append(parrafo);
        }
        
    });

})