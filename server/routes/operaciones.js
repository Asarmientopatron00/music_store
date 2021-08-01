

const express = require('express');
const router = express.Router(); // Crea un objeto que defina rutas.

//Llamados a Modelos

const cancion = require('../models/cancion');
const usuario = require('../models/usuario');  //Llamo al modelo
const lista = require('../models/lista');

//Settings 


//Middlewares


//Routes 

// Add Gets

router.get('/listas', async (req, res) => {          //Obtiene todas las canciones
        let listas = await lista.find({})   //El await evita que se trabaje con callbacks o promesas. 

        try {
                res.json(listas);
        } catch (err) {
                res.status(500).send(error);
        }

});


router.get('/canciones', async (req, res) => {          //Obtiene todas las canciones
        let canciones = await cancion.find({})   //El await evita que se trabaje con callbacks o promesas. 
        res.json(canciones);

});

router.get('/usuarios', async (req, res) => {          //Obtiene todos los usuarios
        let usuarios = await usuario.find()   //El await evita que se trabaje con callbacks o promesas. 
        res.json(usuarios);

});

router.get('/cancion/:id', async (req, res) => {   //Busca cancion por ID
        let cancionEncontrada = await cancion.findById(req.params.id);
        res.json(cancionEncontrada);
});

router.get('/lista/:id', async (req, res) => {   //Busca usuario por ID
        let listaEncontrado = await lista.findById(req.params.id);
        res.json(listaEncontrado);
});

router.get('/usuario/:id', async (req, res) => {   //Busca usuario por el parametro por ID
        let usuarioEncontrado = await usuario.findById(req.params.id);
        res.json(usuarioEncontrado);
});

// router.get('/usuario/busqueda', async function (req, res) {   //Busca usuario por el parametro por ID
//         try {
//                 let name = req.params.name;
//                 res.json(name);
//         } catch (err) {
//                 console.log(err);
//         }

// });







//Add Posts

router.post('/cancion', async (req, res) => {                //Guarda cancion
        let cancionGuardada = new cancion(req.body);
        await cancionGuardada.save();
        res.json({
                status: "Cancion guardada"
        });
});

router.post('/lista', async (req, res) => {                //Guarda cancion
        let listaGuardada = new lista(req.body);
        await listaGuardada.save();
        res.json({
                status: "Lista guardada"
        });
});

router.post('/usuario', async (req, res) => {                //Guarda usuario
        let usuarioGuardado = new usuario(req.body);
        await usuarioGuardado.save();
        res.json({
                status: "Usuario guardado"
        });
});

// Add Puts


router.put('/canciones/:id', async (req, res) => {   //Busca cancion por ID y actualiza
        await cancion.findByIdAndUpdate(req.params.id, req.body);
        res.json({
                status: "Cancion actualizada"
        });
});

router.put('/usuarios/:id', async (req, res) => {   //Busca usuario por ID y actualiza
        await usuario.findByIdAndUpdate(req.params.id, req.body);
        res.json({
                status: "Usuario actualizado"
        });
});


//Add Deletes

router.delete('/cancion/:id', async (req, res) => {
        await cancion.findByIdAndRemove(req.params.id, req.body);
        res.json({
                status: "Cancion eliminada"
        });
})

router.delete('/lista/:id', async (req, res) => {
        await lista.findByIdAndRemove(req.params.id, req.body);
        res.json({
                status: "Lista eliminada"
        });
})

router.delete('/usuario/:id', async (req, res) => {
        await usuario.findByIdAndRemove(req.params.id, req.body);
        res.json({
                status: "Usuario eliminado"
        });
})

router.delete('/canciones/', async (req, res) => {
        await cancion.remove({})
        res.json({
                status: "Canciones eliminadas"
        });
})

router.delete('/lista/', async (req, res) => {
        await lista.remove({})
        res.json({
                status: "Listas eliminadas"
        });
})


router.delete('/usuarios/', async (req, res) => {
        await usuario.remove({})
        res.json({
                status: "Usuarios eliminados"
        });
})





module.exports = router;  // Exporta el modulo routers a otras partes

