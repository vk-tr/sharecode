import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditorView from '../views/EditorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      component: HomeView,
      name: 'home',
      path: '/home'
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: EditorView,
    }
  ]
})

export default router