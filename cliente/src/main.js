import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/plugins'); // Anadido recientemente

Vue.config.productionTip = false

require('./plugins')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
