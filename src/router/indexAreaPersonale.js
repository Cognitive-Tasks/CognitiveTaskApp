import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/homeAreaPersonale.vue'
import Sessione from '../components/sessione.vue'
import Profilo from '../components/profilo.vue'
import Risultati from '../components/risultati.vue'
import SessioniInCorso from '../components/sessioniInCorso.vue'

const routerAreaPersonale = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sessione',
      name: 'sessione',
      component: Sessione
    },
    {
      path: '/profilo',
      name: 'profilo',
      component: Profilo
    },
    {
      path: '/risultati',
      name: 'risultati',
      component: Risultati
    },
    {
      path: '/sessioniInCorso',
      name: 'sessioniInCorso',
      component: SessioniInCorso
    },
  ]
})

export default routerAreaPersonale
