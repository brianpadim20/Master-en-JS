'use strict'

/**
 * Al final de las promesas, se pone el método .catch(error), así mostrará el nombre del error
 * y se puede poner también un alert (opcional)
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
        })
        .catch(error =>{
            console.log(error);
            alert("Error en las peticiones");
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