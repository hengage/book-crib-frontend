import { createRouter, createWebHashHistory } from 'vue-router'


import BookListView from '../views/BooksViews/BookListView'
import SingleBookView from '../views/BooksViews/SingleBookView'
import AuthorListView from '../views/AuthorsViews/AuthorListView'
import SingleAuthorView from '../views/AuthorsViews/SingleAuthorView'
import PageNotFoundErrorView from '../views/PageNotFoundErrorView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BookListView
  },
  {
    path: '/books/:id',
    name: 'singlebook',
    component: SingleBookView
  },
  {
    path: '/authors',
    name: 'authors',
    component: AuthorListView
  },
  {
    path: '/authors/:id',
    name: 'singleauthor',
    component: SingleAuthorView
  },
  
  {
    path: '/:catchAll(.*)',
    name: 'pagenotfound',
    component: PageNotFoundErrorView
  },
  
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
