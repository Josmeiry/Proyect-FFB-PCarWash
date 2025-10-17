import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Loggin from './Loggin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Loggin }
]

export default createRouter({
  history: createWebHistory(),
  routes
})