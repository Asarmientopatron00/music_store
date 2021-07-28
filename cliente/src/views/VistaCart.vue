<template>
  <div class="container-fluid">
 <layout>
      <template slot="canciones">
          <cancion-list></cancion-list>
      </template>
      <template slot="cart">
          <cart></cart>
      </template>
    </layout>
    </div>
</template>

<script>
import Layout from "@/layouts/Layout";
import CancionList from "@/components/CancionList";
import Cart from "@/components/Cart";


export default {
  name: "VistaCart",
  components: {
    Layout,
    CancionList,
    Cart
  },
};
</script>