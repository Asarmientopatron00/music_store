<template>
  <div v-if="canciones.length">
    <paginate name="canciones" :list="canciones" :per="perPage">
      <b-card-group columns> 
        <cancion-item 
          v-for="item in paginated('canciones')" 
          :key="item.id" 
          :cancion="item"
          @addToCart="addCancionToCart"

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
    ...mapState("cart",["cart"])
  },
  methods: {
    ...mapActions("canciones", ["fetchCanciones", "getCanciones"]),
    ...mapMutations('cart',['addCancion']),

      addCancionToCart(cancion){
        console.log(cancion);
        this.addCancion(cancion);
      }
  },
};
</script>

  