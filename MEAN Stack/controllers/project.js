'use strict'

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
    }

};

module.exports=controller;