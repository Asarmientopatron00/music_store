import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import canciones from '@/modules/canciones'  //Inserta el modulo canciones.
import cart from '@/modules/cart'

export default new Vuex.Store({

  modules: { 
    canciones, 
    cart
  }
})
