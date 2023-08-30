import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import ContactPageView from '../views/ContactPageView.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
