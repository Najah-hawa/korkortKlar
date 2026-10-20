import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kategorier',
      name: 'categories',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/vagmarken/kategori/:categoryCode',
      name: 'category-signs',
      component: () => import('@/views/CategorySignsView.vue')
    }, 
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/QuizView.vue')
    },
    {
      path: '/teoriprov',
      name: 'teoriprov-info',
      component: () => import('../views/TeoriprovInfoView.vue')
    },
    {
      path: '/resultat',
      name: 'results',
      component: () => import('../views/ResultsView.vue')
    },
    {
      path: '/vagmarken',
      name: 'road-signs',
      component: () => import('../views/RoadSignsView.vue')
    },
    {
     path: '/om-oss',
     name: 'about',
     component: () => import('@/views/AboutView.vue')
   }
  ],
})

export default router
