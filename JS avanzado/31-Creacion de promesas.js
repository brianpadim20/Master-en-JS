'use strict'

/*
Las promesas se usan cuando:
* Se tienen que leer archivos
* Cuando se deben enviar cosas por post o ajax
* Recibir cosas por AJAX
*/

var divUsuarios = document.querySelector("#usuarios");

    getUsuarios()
        .then(data => data.json())//En vez de data, puedo poner el nombre que yo quiera
        .then(users=>{
            listadoUsuarios(users.data);

            return getInfo();
        })
        .then(data => {
            console.log(data);
        });


function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2')


}function getInfo(){
    var profesor={
        nombre: 'Brian',
        apellido: 'Patiño'
    };

    return new Promise((resolve, reject)=>{
        var profesor_string = JSON.stringify(profesor);

        if(typeof profesor_string != 'string') return reject('error');

        return resolve (profesor_string);
    })
    

    

}function listadoUsuarios(usuarios){
    usuarios.map((user, i)=>{//Map es lo mismo que for each
    let nombre = document.createElement('p');
    
    nombre.innerHTML = i +"-"+ user.first_name + " " + user.last_name;

    divUsuarios.appendChild(nombre);

    document.querySelector(".loading").style.display = 'none';
    });

}