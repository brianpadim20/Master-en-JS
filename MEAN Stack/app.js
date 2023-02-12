'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app =express();

// cargar archivos de rutas

//middlewares (método que se ejecuta antes de ejecutar la acción de un controlador)

app.use(bodyParser.urlencoded({extended:false})); //configuración necesaria para bodyParser
app.use(bodyParser.json());//cualquier tipo de petición se convierte a JSON

// CORS

//rutas

app.get('/',(req, res)=>{
    res.status(200).send(
        "<h1>Página de inicio</h1>"
    )//el (200 sería una respuesta exitosa por parte del servidor)
});

app.get('/test',(req, res)=>{
    res.status(200).send({
        message:"Hola mundo desde mi API de NodeJS"
    })
});

// exportar el módulo 

module.exports = app; //Exporta app que es la que tiene toda la configuración de los middlewares