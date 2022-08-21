import { createRouter, createWebHashHistory } from 'vue-router'
import BookListView from '../views/BooksViews/BookListView'
import AuthorListView from '../views/AuthorsViews/AuthorListView'

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
