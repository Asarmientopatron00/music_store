<template>
<div class="container-fluid">
 <b-card bg-variant="dark" text-variant="white" 
    :title ="`Titulo: ${cancion.name.slice(0,20)}`"
    :img-src="cancion.urlImagen"
    :img-alt="cancion.name"
    img-top
    class="mb-2"
    >
       <p class="muted"> Autor: {{cancion.autor.slice(0,10)}} </p>
       <b-button  block  
                  variant="light"
                  @click="$emit('addToMiLista',cancion)" >añadir a lista</b-button>
 </b-card>
</div>
</template>

<script>
export default {
   
   name: "CancionItem",
   props:  //Un props es un hash o diccionario de atributos
   {
      cancion:{
         type: Object,
         require:true
      }
   }
    
}
</script>
