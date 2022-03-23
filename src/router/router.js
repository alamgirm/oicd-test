import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../components/LogIn.vue'
import DashBoard from '../components/DashBoard.vue'

const routes = [
  { path: "/login", component: LogIn },
  { path: "/dashboard", component: DashBoard },
  { path: "/", redirect: "/login" }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export { router }