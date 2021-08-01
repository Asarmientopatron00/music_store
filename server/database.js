//Configuracion de la DB

const mongoose= require('mongoose');
const MONGODB_URI ='mongodb://localhost/musicstore';


//Conexion a BD a traves de mongoose
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  }) // Estas configuracions son ara que moongose no bote error.
  .then(db => console.log('DB is connected'))
  .catch(err => console.log("Error al conectar BD:", err)); //Si existe algn error, lo capturo y muestro por consola.