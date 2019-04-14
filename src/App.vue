<template>
  <b-container id="app">
    <Titlebar/>
    <Navbar/>
    <PostList/>
  </b-container>
</template>

<script>
import Titlebar from './components/Titlebar.vue'
import Navbar from './components/Navbar.vue'
import PostList from './components/PostList.vue'

export default {
  name: 'app',
  components: {
    Titlebar,
    Navbar,
    PostList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Lato');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
