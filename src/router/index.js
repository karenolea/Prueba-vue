import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administracion from '../views/Administracion'
import EditarOpinion from '../components/EditarOpinion'
import NotFound from '../components/NotFound.vue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/portada',
  redirect: '/',
},
{
  path: '/inicio',
  redirect: '/',
},
{
  path: '/administracion',
  name: 'administracion',
  component: Administracion,
  children: [
      {
        path: 'editaropinion/:id',
        name: 'EditarOpinion',
        component: EditarOpinion,
      },
    ],
},
{
  path: '/cards',
  name: 'cards',
  props: true,
  component: () =>
    import( /* webpackChunkName: "about" */ '../components/Cards.vue')
},
{
  path: '/opiniones',
  name: 'Opiniones',
  component: () =>
    import( /* webpackChunkName: "about" */ '../views/Opiniones.vue')
},
{
  path: '*',
  name: NotFound,
  component: NotFound
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
