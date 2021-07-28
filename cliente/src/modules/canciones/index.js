import state from './state'
import * as mutations from './mutations' //Trae todo lo que esta en mutaciones
import * as actions from './actions'

const namespaced = true  //Organiza todos los paquetes del modulo con el nombre de la carpeta de afuera


export default{
    namespaced,   //Ayuda a que los modulos no entren en conflicto
    state,
    actions,
    mutations
}