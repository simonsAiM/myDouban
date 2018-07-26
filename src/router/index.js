import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Pages from '@/views/Pages'
import Home from '@/views/Home'
import Movie from '@/views/Movie'
import Book from '@/views/Book'
import Status from '@/views/Status'
import Group from '@/views/Group'
import DetailView from '@/views/DetailView'
import Search from '@/views/Search'
import Subject from '@/views/Subject'
import Login from "@/views/Login"
import Register from "@/views/Register"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages'
    },{
      path : '/pages',
      component : Pages,
      children: [
        {
          path : '/',
          redirect : '/pages/home'
        },{
          path: 'home',
          name: 'Home',
          component: Home,
        },{
          path: 'movie',
          name: 'Movie',
          component: Movie
        }, {
          path: 'book',
          name: 'Book',
          component: Book
        }, {
          path: 'status',
          name: 'Status',
          component: Status
        }, {
          path: 'group',
          name: 'Group',
          component: Group
        }, {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },{
      path: '/search',
      name: 'Search',
      components: {
        default: Home,
        search: Search
      }
    },
    {
      path: '/:classify/subject/:id',
      name: 'Subject',
      component: Subject
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/reg',
      name: 'Register',
      component: Register
    }
  ]
})
