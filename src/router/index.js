import { createRouter, createWebHashHistory } from 'vue-router'
import BookListView from '../views/BookListView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BookListView
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
