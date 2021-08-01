'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;


const cancion = new Schema({
    name: {
        type: String,            //La variable name es obligatoria para crear una cancion.
        required: "Enter a valid name"
    },
    urlPista: String,
    urlImagen: String,
    calificacion: {
        type: Number
    },
    autor: String,
    letra: String,

}, { timestamps: true } // Guarda la fecha en la cual la cancion fue creada de manera automatica. 
)

module.exports = mongoose.model("cancion", cancion);