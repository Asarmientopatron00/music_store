//Definimos la lista de reproduccion.

const mongoose = require('mongoose');
const { Schema } = mongoose;



//Una lista de reproduccion esta compuesta por un nombre de lista y un array de tipo cancion.
const lista = new Schema({
    name: String,
    canciones: [
        { type: mongoose.Schema.Types.ObjectId,
           ref: "cancion"
        }
    ]

}, { timestamps: true } // Guarda la fecha en la cual la cancion fue creada de manera automatica. 
);

module.exports = mongoose.model("lista", lista);