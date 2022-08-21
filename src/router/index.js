import { createRouter, createWebHashHistory } from 'vue-router'
import BookListView from '../views/BooksViews/BookListView'
import AuthorListView from '../views/AuthorsViews/AuthorListView'
import SingleBookView from '../views/BooksViews/SingleBookView'

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
  },
  {
    path: '/books/:id',
    name: 'singlebook',
    component: SingleBookView
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
