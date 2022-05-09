'use strict'

//Fetch y peticiones a servicios/apis rest (Peticiones ajax o asincronas a un servidor)


var divUsuarios = document.querySelector("#usuarios");
var divJanet = document.querySelector("#Janet");

//fetch('https://jsonplaceholder.typicode.com/users')

    getUsuarios()
        .then(data => data.json())//En vez de data, puedo poner el nombre que yo quiera
        .then(users=>{
            listadoUsuarios(users.data);
            return getJanet();
        })
        .then (data =>data.json)
        .then (user =>{
            mostrarJanet(user.data);
        });


function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2')

}function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i)=>{//Map es lo mismo que for each
    let nombre = document.createElement('p');
    
    nombre.innerHTML = i +"-"+ user.first_name + " " + user.last_name;

    divUsuarios.appendChild(nombre);

    document.querySelector(".loading").style.display = 'none';
    });

}function mostrarJanet(user){
    console.log (user);
    let nombre = document.createElement('p');
    let avatar = document.createElement('img');
    
    avatar.src = user.avatar;
    avatar.width = '100'

    nombre.innerHTML = user.first_name + " " + user.last_name;

    divJanet.appendChild(nombre);
    ivJanet.appendChild(avatar);

    document.querySelector("#Janet .loading").style.display = 'none';

}

//Fetch accede a un servicio remoto, hace la petición, se queda a la espera que cuando se reciban
//los datos se conviertan a JSON, se hace con la función de flecha.
