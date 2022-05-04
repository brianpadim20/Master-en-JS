'use strict'

//Fetch y peticiones a servicios/apis rest (Peticiones ajax o asincronas a un servidor)

/**
 * Lo primero que se hace en la promesa es capturar los datos, se convierten a JSON
 * En la variable data se tienen los datos recogidos y se guardan en la variable usuario
 * 
 */

var divUsuarios = document.querySelector("#usuarios");

var usuarios = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())//En vez de datos, puedo poner el nombre que yo quiera
    .then(users=>{
        usuarios=users.data;
        console.log(usuarios);

        usuarios.map((user, i)=>{
            let nombre = document.createElement('h2');
            
            nombre.innerHTML = i + user.first_name + " " + user.last_name;

            divUsuarios.appendChild(nombre);
        });
    });

//Fetch accede a un servicio remoto, hace la petición, se queda a la espera que cuando se reciban
//los datos se conviertan a JSON, se hace con la función de flecha.
