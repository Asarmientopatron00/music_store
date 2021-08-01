<template>
<div>
<b-navbar toggleable="lg" type="dark" variant="info">
  <router-link to="/">
    <b-navbar-brand router-link >Home</b-navbar-brand></router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <b-nav-form  @submit.prevent="showCancion">
          <b-form-input size="sm" class="mr-sm-2" v-model="busqueda.parametro" placeholder="Search" ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 mybutton" type="submit" >
             <img src="../assets/images/search.png" class="img-fluid" alt="Search button" > 
            </b-button>    
      </b-nav-form>
        <b-navbar-nav>
      <b-nav-item router-link to="/AdvancedSearch">Advanced Search</b-nav-item>
        </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0 btn btn-dark" type="login" router-link to="/Login">Log In</b-button>
      </b-navbar-nav>
      <b-navbar-nav class="ml-1">
         <b-navbar-brand  class="ml-auto mr-auto" router-link to="/Cart">
      <img src="../assets/images/car.png" alt="Kitten" class="rounded-circle">
    </b-navbar-brand>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar> 
</div>
</template>


<script>
import { mapState,mapGetters, mapActions} from "vuex";

export default{
    name:'Navbar',
    data(){
      return {
          busqueda: {
            parametro:''
          }
    }},
    computed: {
      ...mapState("canciones", ["canciones"])
    },
    methods: {
      ...mapActions("canciones", ["fetchCanciones"]),
      showCancion(){
        const cancion=this.canciones.find( cancion => cancion.name ==this.busqueda.parametro );
        console.log(cancion);
        
      }
    }
   
}
</script>