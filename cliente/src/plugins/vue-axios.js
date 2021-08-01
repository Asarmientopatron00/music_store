import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const baseURL="http://localhost:5000"; //PARA PRODUCCION midominio.com.co   
axios.defaults.baseURL=baseURL;

Vue.use(VueAxios, axios);
