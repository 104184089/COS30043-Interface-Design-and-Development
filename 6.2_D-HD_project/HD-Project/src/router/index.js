import { createRouter, createWebHistory } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppNavBar from '@/components/AppNavBar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHeader
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: AppNavBar
  },
  {
    path: '/flashcard',
    name: 'flashcard',
    component: AppNavBar
  },
  {
    path: '/about',
    name: 'about',
    component: AppNavBar
  },
  {
    path: '/signin',
    name: 'signin',
    component: AppNavBar
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
