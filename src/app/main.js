import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use('VueRouter');
Vue.use('VueRouter');
Vue.use(VueAxios, Axios);

import App from './app.vue';

const rutas = [{

  path: '/',
  name: 'app',
  component: App
}];

const router = new VueRouter({
  mode: 'history'
}, {
  routes: rutas
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


console.log('Componente app cargado');
