'use strict'

 //timers

function intervalo(){
        var tiempo = setInterval(() => {

        console.log("Set interval ejecutado"); 
        var titulo = document.querySelector("h1"); 
        if(titulo.style.fontSize == "50px"){
            titulo.style.fontSize = "20px";

        }else{
            titulo.style.fontSize="50px";

        }
    }, 1000);

    return tiempo;
}   var tiempo = intervalo();

    //Programar el botón stop para pausar el incremento y decremento del título:

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", ()=>{
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", ()=>{
        intervalo();

});


//Set interval se ejecutará indefinidamente


/*
var tiempoDos = setTimeout(() => {
    console.log("Set interval ejecutado"); 
    var titulo = document.querySelector("h1"); 
    if(titulo.style.fontSize == "50px"){
        titulo.style.fontSize = "20px";

    }else{
        titulo.style.fontSize="50px";

    }
}, 5000);

/*
SetTimeOut se ejecutará una sola vez

*/
