'use strict'

//BOM: Browser Object Model

function getBOM(){
    console.log(window.innerHeight); //Ver el tamaño de la pantalla con altura
    console.log(window.innerWidth);//Anchura de la pantalla disponible
    console.log(screen.width);//Anchura de la ventana
    console.log(screen.height);//Anchura de la ventana
    console.log(window.location);//Muestra la URL del navegador actualmente, si se pone.href saca url

}function redirigir(url){
    window.location.href = url;

}function newWindow(url){
    window.open=(url,"","width=400, height=300");
}

getBOM();

