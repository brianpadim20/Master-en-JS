'use strict'

//importar el modelo projecs
var Project = require('../models/project');

/**
 * la función recibe una request y una response (req, res), req es para recibir los datos que
 * se envíen por post y res es para retornar una respuestastatus 200 (bien recibido) enviando 
 * un mensaje
 */

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy home'

        });

    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador del project'
            
        });
    },

    saveProject: function(req, res){
        var project = new Project(); //nuevo objeto de tipo Project

        var params = req.body;

        project.name=params.name;
        project.description=params.description;
        project.category=params.category;
        project.langs=params.langs;
        project.year=params.year;
        project.image=null; // Se añade mas tarde

        project.save((err, projectStored)=>{
            //Si arroja un error:
            if (err) return res.status(500).send({message:'Error al guardar datos'});/**status 500 error */

            //Si no se guarda el project stored
            if(!projectStored) return res.status(404).send({message:'No se ha podido guardar el proyecto'});
                    //404 error al guardar
        
            //En caso de que guarde bien
            return res.status(200).send({project:projectStored});/**Si no se pone la propiedad project
            y solamente se pasa projectStored, crearía una propiedad llamada projectSotred, esto guarda
            en la base de datos el nuevo proyecto */
            
        });
        

    }

};

module.exports=controller;