import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/home.vue'
import About from '../components/about.vue'
import Contatti from '../components/contatti.vue'
import Task1 from '../components/task1.vue'
import Task2 from '../components/task2.vue'
import Task3 from '../components/task3.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/task1',
      name: 'task1',
      component: Task1
    },
    {
      path: '/task2',
      name: 'task2',
      component: Task2
    },
    {
      path: '/task3',
      name: 'task3',
      component: Task3,
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: Contatti,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ]
})

export default router
