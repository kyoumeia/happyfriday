import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/home.vue')
const Item = () => import('../views/item/item.vue')
const Score = () => import('../views/score/score.vue')

const routes = [{
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/item',
    component: Item
  },
  {
    path: '/score',
    component: Score
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})