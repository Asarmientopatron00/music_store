import Vue from 'vue';
import axios from "axios";


export async function fetchCancionesData({ commit }){
    const data = await fetch('fixeddata/canciones.json');
    const canciones = await data.json();
    commit('setCanciones', canciones);
}

export async function fetchCanciones({ commit }){
  await Vue.axios.get('/canciones').then(({ data }) => {
      commit('setCanciones', data);
  }).catch((error) => {
      commit('cancionesError', error.message);
  }).finally(() => {
      console.log("Petición de fetchCanciones resuelta");
  });
}






