import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from '@/http';

Vue.config.productionTip = false

//seta o http como variável global do sistema, podendo ser chamado em qualquer lugar sem importação
Vue.prototype.$http = http;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
