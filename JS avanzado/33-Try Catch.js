'use strict'

try{
    var year = 2020;

    console.log(year);
    //Pasando incluso una URL correcta, el código ejecuta correctamente
    console.log(decodeURIComponent("https://dev.azure.com/bpatino"))
    //Si paso una URL incorrecta, el navegador arroja el error del código
    console.log(decodeURIComponent("https://dev.a%&$zure.com/bpatino"))
    //No escupe el error por consola, sino que se queda capturado
}catch(error){
    console.log(error);
    alert("Ha ocurrido un error en el código")
}
