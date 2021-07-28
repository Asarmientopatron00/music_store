export function addCancion(state, cancion){
    const tempCancionInCart = state.cart.find(item => item.id == cancion.id);
    if(!tempCancionInCart){
        let tempCancion = Object.assign({}, cancion);
        tempCancion.qty = 1;
        state.cart.push(tempCancion);
        console.log("Cancion anadida al carro");
    } else {
        tempCancionInCart.qty += 1;
        console.log("Cancion no fue anadida al carro");
    }
}

export function removeCancionFromCart(state, cancion){
    state.cart = state.cart.filter(({ id }) => id !== cancion.id);
    console.log("Cancion removida del carro");
}