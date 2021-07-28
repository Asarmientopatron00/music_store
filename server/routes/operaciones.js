const express= require('express');

const router = express.Router(); // Crea un objeto que defina rutas.

//Llamados a Modelos

const cancion = require('../models/cancion');
const usuario =require('../models/usuario')  //Llamo al modelo

//Settings 


//Middlewares


//Routes 

// Add Gets
router.get('/canciones', async (req, res) => {          //Obtiene todas las canciones
        var canciones = await cancion.find({})   //El await evita que se trabaje con callbacks o promesas. 
        res.json(canciones);

});

router.get('/usuarios', async (req, res) => {          //Obtiene todos los usuarios
        var usuarios = await usuario.find()   //El await evita que se trabaje con callbacks o promesas. 
        res.json(usuarios);

});

router.get('/cancion/:id', async (req,res)=>{   //Busca cancion por ID
        var cancionEncontrada = await cancion.findById(req.params.id);
        res.json(cancionEncontrada);
});

router.get('/usuario/:id', async (req,res)=>{   //Busca usuario por ID
        var usuarioEncontrado = await usuario.findById(req.params.id);
        res.json(usuarioEncontrado);
});


//Add Posts

router.post('/cancion', async (req,res)=>{                //Guarda cancion
        var cancionGuardada= new cancion(req.body);
        await cancionGuardada.save();
        res.json({
                status: "Cancion guardada"
        });
});

router.post('/usuario', async (req,res)=>{                //Guarda usuario
        var usuarioGuardado= new usuario(req.body);
        await usuarioGuardado.save();
        res.json({
                status: "Usuario guardado"
        });
});

// Add Puts


router.put('/canciones/:id', async (req,res)=>{   //Busca cancion por ID y actualiza
        await cancion.findByIdAndUpdate(req.params.id, req.body);
        res.json({
                status: "Cancion actualizada"
        });
});

router.put('/usuarios/:id', async (req,res)=>{   //Busca usuario por ID y actualiza
        await usuario.findByIdAndUpdate(req.params.id, req.body);
        res.json({
                status: "Usuario actualizado"
        });
});


//Add Deletes

router.delete('/cancion/:id', async (req,res)=>{
        await cancion.findByIdAndRemove(req.params.id, req.body);
        res.json({
                status: "Cancion eliminada"
        });
})

router.delete('/usuario/:id', async (req,res)=>{
        await usuario.findByIdAndRemove(req.params.id, req.body);
        res.json({
                status: "Usuario eliminado"
        });
})

router.delete('/canciones/', async (req,res)=>{
        await cancion.remove({})
        res.json({
                status: "Canciones eliminadas"
        });
})
router.delete('/usuarios/', async (req,res)=>{
        await usuario.remove({})
        res.json({
                status: "Usuarios eliminados"
        });
})





module.exports = router;  // Exporta el modulo routers a otras partes

