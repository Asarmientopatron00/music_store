export function totalCost(state){
    console.log(state.cart);
    return state.cart.reduce((accumulator, currentCancion) => {
        return (currentCancion.price * currentCancion.qty) + accumulator
    }, 0);
}