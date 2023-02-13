'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app =express();

// cargar archivos de rutas
var project_routes = require('./routes/project');

//middlewares (método que se ejecuta antes de ejecutar la acción de un controlador)
app.use(bodyParser.urlencoded({extended:false})); //configuración necesaria para bodyParser
app.use(bodyParser.json());//cualquier tipo de petición se convierte a JSON

// CORS

//rutas
app.use('/api',project_routes);

// exportar el módulo 

module.exports = app; //Exporta app que es la que tiene toda la configuración de los middlewares