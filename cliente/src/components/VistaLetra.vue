<template>
    <div>{{cancion.letra}}</div>
</template>

<script>



export default {
    name:"VistaLetra",
    props: {
        cancion:{
            type:Object,
            required:true,
            default: () => ("No hay letra disponible")
        }
    }
}
</script>