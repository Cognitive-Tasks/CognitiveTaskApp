import Dashboard from '../views/AdminSite/dashboard.vue'
import Sessione from '../views/AdminSite/sessione.vue'
import Profilo from '../views/AdminSite/profilo.vue'
import Risultati from '../views/AdminSite/risultati.vue'
import SessioniInCorso from '../views/AdminSite/sessioniInCorso.vue'

const routes = [
    
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/admin/sessione',
      name: 'sessione',
      component: Sessione
    },
    {
      path: '/admin/profilo',
      name: 'profilo',
      component: Profilo
    },
    {
      path: '/admin/risultati',
      name: 'risultati',
      component: Risultati
    },
    {
      path: '/admin/sessioniInCorso',
      name: 'sessioniInCorso',
      component: SessioniInCorso
    },
  ];

export default routes
