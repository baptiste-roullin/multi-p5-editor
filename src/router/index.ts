import { createRouter, createWebHistory } from 'vue-router'
import files from '../files.json'


//const HomeView = import(`../views/${}.vue`)

const views = files.map((file, index) => {
  return {
    path: '/' + file,
    alias: (index === 0 ? '/' : '/' + file),
    name: file,
    component: import(`../views/${file}.vue`)
  }
})
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: views
  /*[
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]*/
})

export default router
