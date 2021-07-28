
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;



const cancion= new Schema({
    name: String,
    urlPista: String,
    urlImagen: String,
    calificacion: {
        type: Number,
        required: false
    },
    autor: String
})

module.exports=mongoose.model('cancion', cancion);