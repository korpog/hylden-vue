import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'
import SignUp from './components/User/SignUp.vue'
import LogIn from './components/User/LogIn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/posts/:category',
      name: 'posts',
      component: PostList
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
  ]
})