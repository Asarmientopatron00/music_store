const express = require('express');
const cors=require('cors');
const morgan = require('morgan');  // Modulo que muestra las peticiones del navegador en el servidor
const mongoose= require('mongoose');

const app=express();

//Conexion a BD a traves de mongoose
mongoose.connect('mongodb://localhost/musicstore', { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log("Error al conectar BD:", err));

// Settings //Middlewares
app.use(express.json()); // Cada vez que se reciba informacion tipo json, el servidor puede entenderlo.
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use(morgan('dev')); // El comando dev indica que se quiere ver un mensaje corto por consola.

//Routes 

app.use(require('./routes/operaciones')); // 

//Statis files: Archivos que se envian al frontend

app.use(express.static(__dirname+'/public')); //define donde iran los archivos estaticos  C:\music_store\server/public


//app.use('/api/posts', posts);  //Cualquier ruta que vaya a /api/posts ira post

const port = process.env.PORT || 5000; //Puerto de conexion del localhost

app.listen(port, () => console.log(`Server started on port: ${port}`)); //Iniciar el servirdor



//Middleware









