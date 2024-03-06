import { createRouter, createWebHistory } from 'vue-router'

import mainSiteRoutes from './mainSiteRoutes'
import adminSiteRoutes from './adminSiteRoutes'

const routes = [
  ...mainSiteRoutes,
  ...adminSiteRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;