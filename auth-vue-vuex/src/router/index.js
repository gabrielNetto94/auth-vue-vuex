import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
//import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue';
import provedor from '@/provedor';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    //lazy loading para carregar o arquivo apenas quando chamar esta rota
    component : ( ) => import(/*webpackChunkName: "registrar" */'../views/NovoUsuario'),
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      //seta para true se página é publica ou privada
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
});

//antes de cada rota testa se a rota é pública ou privada
router.beforeEach((routeTo, routeFrom, next) => {
  //se rota não for publica e não tiver token
  if (!routeTo.meta.publica && !provedor.state.token) {

    //manda pra login
    return next({ path: '/login' })
  }
  next();
});

export default router;
