<template>
  <div v-if="milista.length">
    <b-table striped hover :items="milista" :fields="fields">
      <template #cell(actions)="row">
        <b-button variant="danger" @click="removeItem(row)">
          Eliminar
        </b-button>
      </template>
    </b-table>
  </div>
  <b-alert v-else variant="info" show>No hay canciones en tu lista</b-alert>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "MiLista",
  data() {
    return {
      fields: ["name"],
    };
  },
  computed: {
    ...mapState("milista", ["milista"]),
  },
  methods: {
    ...mapMutations("milista", ["removeCancionFromMiLista"]),
    removeItem(row) {
      console.log(row);
      this.removeCancionFromMiLista(row.item);
    },
  },
};
</script>