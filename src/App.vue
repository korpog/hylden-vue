<template>
  <div id="app" class="container">
    <Navbar/>
    <Posts/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Posts from './components/Posts.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Posts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
