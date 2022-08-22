import { createRouter, createWebHashHistory } from 'vue-router'


import BookListView from '../views/BooksViews/BookListView'
import SingleBookView from '../views/BooksViews/SingleBookView'
import AuthorListView from '../views/AuthorsViews/AuthorListView'
import SingleAuthorView from '../views/AuthorsViews/SingleAuthorView'
import PageNotFoundErrorView from '../views/PageNotFoundErrorView'
import SignUpView from '../views/AuthorsViews/SignUpView'
import UpdateAuthorView from '../views/AuthorsViews/UpdateAuthorView'

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
    path: '/authors/register',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/authors/:id/update',
    name: 'updateauthor',
    component: UpdateAuthorView
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
