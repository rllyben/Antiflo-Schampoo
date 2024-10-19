import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import ContactPageView from '../views/ContactPageView.vue'
import PrivacyPageView from '../views/PrivacyPageView'
import AGRView from '../views/AGRView'
import JobsView from '../views/JobsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPageView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPageView
  },
  {
    path: '/agr-verunreinigungen',
    name: 'agr-verunreinigungen',
    component: AGRView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
