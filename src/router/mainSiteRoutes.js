import HomeView from '../views/MainSite/home.vue'
import About from '../views/MainSite/about.vue'
import Contatti from '../views/MainSite/contatti.vue'
import Task1 from '../views/MainSite/task1.vue'
import Task2 from '../views/MainSite/task2.vue'
import Task3 from '../views/MainSite/task3.vue'
import Login from '../views/MainSite/login.vue'
import Register from '../views/MainSite/register.vue'


const routes = [
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
  ];
  
export default routes
