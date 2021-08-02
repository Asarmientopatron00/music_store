<template>
<b-container class="xl">
  <div v-if="canciones.length">
    <paginate name="canciones" :list="canciones" :per="perPage">
      <b-card-group columns> 
        <cancion-item 
          v-for="cancion in paginated('canciones')" 
          :key="cancion.id" 
          :cancion="cancion"
          @addToMiLista="addCancionToMiLista"

      ></cancion-item></b-card-group>
 
    </paginate>
    <paginate-links 
      for="canciones"
      :classes="{
        'ul': 'pagination',
        'li': 'page-item',
        'li > a': 'page-link',
      }"
    ></paginate-links>
  </div>
  <b-alert v-else variant="info" show> No hay canciones disponibles </b-alert>
  </b-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CancionItem from '@/components/CancionItem'



export default {
  name: "CancionList",
  components: {
    CancionItem  // Añade el modulo cancion
  },
  data() {
    return {
      paginate: ["canciones"],
      perPage: 3,
    };
  },
  mounted() {
    this.fetchCanciones();
  },
  computed: {
    ...mapState("canciones", ["canciones"]),
    ...mapState("milista",["milista"])
  },
  methods: {
    ...mapActions("canciones", ["fetchCanciones", "fetchCancionesData"]),
    ...mapMutations('milista',['addCancion']),

      addCancionToMiLista(cancion){
        this.addCancion(cancion);
      }
  },
};
</script>

