import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'
import SignUpForm from './components/User/SignUpForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostList
    },    
    {
      path: '/signup',
      name: 'signUp',
      component: SignUpForm
    },
  ]
})
