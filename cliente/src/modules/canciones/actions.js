import axios from "axios";


export async function fetchCanciones({ commit }){
    const data = await fetch('fixeddata/canciones.json');
    const canciones = await data.json();
    commit('setCanciones', canciones);
}

export async function getCanciones({ commit}){

    axios
    .get("http://localhost:5000/canciones")
    .then(response => {
      console.log(response.data);
      this.canciones = response.data;
    })
    .catch((error) => {
      console.log("Error al utilizar el get de canciones", error);
    });

}

