<template>
 <div id="app">
  <navbar></navbar>
  <router-view></router-view>
  </div>
</template>


<script>


import Navbar from './components/Navbar.vue'


export default {
  name:'App',
  components:{ Navbar} 
}

</script>



<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfe3e7;
}

  .container-fluid {
        min-height: 100%;
      }


</style>
