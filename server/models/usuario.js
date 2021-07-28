'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;


const usuario= new Schema({
    name: { 
        type: String,
        required: true
    },
    password: String,
    email: String,
    active: Boolean,
    signupDate:{
        type:Date,
        default: Date.now()
    },
    lastLogin: Date
})


module.exports=mongoose.model('usuario',usuario);
