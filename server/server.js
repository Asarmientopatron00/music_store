//En este archivo se guarda la configuracion del servidor express y luego es llamado en index

//Inicializaciones
const express = require('express');
const app = express(); // Retorna el servidor express en el app
const path=require('path');
const cors=require('cors');
const morgan = require('morgan');  // Modulo que muestra las peticiones del navegador en el servidor

// Settings : Lo que quiero que haga express en base a unos modulos

app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views')); 
app.use(cors());
app.use(morgan('dev')); // El comando dev indica que se quiere ver un mensaje corto por consola.


//Middlewares

app.use(express.json()); // Cada vez que se reciba informacion tipo json, el servidor puede entenderlo.
app.use(express.urlencoded({ /*This option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. */
    extended: true
}));

//Global variables


//Routes

app.use(require('./routes/operaciones')); // 


//Static files: Los archivos estaticos son archivos que cualquier aplicacion cliente puede acceder desde el servidor.

app.use(express.static(path.join(__dirname + '/public'))); //define donde iran los archivos estaticos  C:\music_store\server/public



module.exports = app;