const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcryptjs'); //Modulo requerido para cifrar el password y porporcionar seguridad.
//Para instalar el modulo anterior ejecute el sgte comando npm install bcryptjs



const usuario= new Schema({
    name: { 
        type: String,
        required: "Enter a validad name"
    },
    password: String,
    email: String,
    active: Boolean,
    signupDate:{
        type:Date,
        default: Date.now()
    },
    lastLogin: Date,
    lista: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "lista"

    }
},  { timestamps: true }  // Guarda la fecha en la cual el post fue realizado.
)

usuario.methods.encryptPassword = async (password)=> { // El patron de diseno de node es asincrono.
    const salt = await bcrypt.genSalt(10); // Esto requiere trabajo del server, se ejecute 10 veces por defecto, es un metodo asincrono
    return await bcrypt.hash(password, salt);  //Nos devuelve la contrasena de manera cifrada 
};

//Toma la constrasena y la compara con la de la base de datos || se compara el cifrado 
usuario.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password); //Compara la contrasena del usuario con la de la BD ...
    //Devuelve un dato booleano true o false.
}



module.exports=mongoose.model("usuario",usuario);
