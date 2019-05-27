import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import PostDetail from './components/Posts/PostDetail.vue'
import PostList from './components/Posts/PostList.vue'
import PostCreate from './components/Posts/PostCreate.vue'
import SignUp from './components/User/SignUp.vue'
import LogIn from './components/User/LogIn.vue'
import UserPage from './components/User/UserPage.vue'

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
      component: PostList,
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: PostDetail,
    },
    {
      path: '/post-create',
      name: 'post-create',
      component: PostCreate,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage
    },
  ]
})