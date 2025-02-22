import { createRouter, createWebHistory } from 'vue-router'
import { cleanedList } from '../utils'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: cleanedList.map((file, index) => {
    return {
      path: '/' + file,
      //alias: (index === 0 ? '/' : '/' + file),
      name: file,
      component: () => import(`../views/shellComponent.vue`)
    }
  })

})

export default router
