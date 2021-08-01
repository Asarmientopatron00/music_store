import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import canciones from '@/modules/canciones'  //Inserta el modulo canciones.
import milista from '@/modules/milista'

export default new Vuex.Store({

  modules: { 
    canciones, 
    milista
  }
})
