// Para produccion considerar usar dotenv para proteger las variables y utilizar variables de entorno. 
const app= require('./server'); //Importa la constante app 
require('./database');  //Va al archivo database.js


//Conexion a la BD, el valor del puerto se muestra en la consola.
const port=app.get('port')
app.listen(port, () => console.log(`Server started on port: ${port}`)); //Iniciar el servirdor












