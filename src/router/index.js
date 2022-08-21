import { createRouter, createWebHashHistory } from 'vue-router'
import BookListView from '../views/BookListView'
import AuthorListView from '../views/AuthorListView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BookListView
  },
  {
    path: '/authors',
    name: 'authors',
    component: AuthorListView
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
