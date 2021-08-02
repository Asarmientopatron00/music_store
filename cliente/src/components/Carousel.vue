<template>
  <div class="container-fluid">
    <div class="row my-row">
      <div class="col-12 col-sm-12 col-md-8 mycol1 ms-auto">
        <b-carousel
          id="carousel"
          no-animation
          indicators
          content-visible-up
          background="black"
          style="text-shadow: 1px 1px 2px #333"
          v-if="canciones.length"
        >
          <b-carousel-slide
            v-for="(cancion, index) in canciones"
            :key="index"
            :img-src="cancion.urlImagen"
            
          >
            {{ cancion.autor }}
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-12 col-sm-12 col-md-4 mycol1 ms-auto">
        <CancionList />
      </div>
    </div>
  </div>
</template>

<script>
import CancionList from "@/components/CancionList.vue";
import { mapState, mapActions} from 'vuex';

export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  }, mounted(){
    this.fetchCanciones();
  },
  computed: {
    ...mapState('canciones',['canciones'])
  }
  ,
  components: {
    CancionList,
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    ...mapActions('canciones',['fetchCanciones', 'getCanciones'])
  }
};
</script>

