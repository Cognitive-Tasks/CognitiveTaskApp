import { createRouter, createWebHistory } from 'vue-router'

import mainSiteRoutes from './mainSiteRoutes'
import adminSiteRoutes from './adminSiteRoutes'
import testSiteRoutes from './testSiteRoutes'

const routes = [
  ...mainSiteRoutes,
  ...adminSiteRoutes,
  ...testSiteRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;