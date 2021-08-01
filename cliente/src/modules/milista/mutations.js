export function addCancion(state, cancion){
        console.log("ENTRO A MUTACION ADDCANCION");
        console.log(cancion);
        state.milista.push(cancion);
        console.log(state.milista);
}

export function removeCancionFromMiLista(state, cancion){
    state.milista = state.milista.filter(({ id }) => id !== cancion.id);
    console.log("Cancion removida de la lista");
}