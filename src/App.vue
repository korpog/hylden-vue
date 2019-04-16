<template>
  <b-container id="app" class="mh-100">
    <Titlebar/>
    <Navbar/>
    <router-view></router-view>
  </b-container>
</template>

<script>
import Titlebar from './components/Titlebar.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Titlebar,
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Lato');
html, body {
  background: linear-gradient(to bottom, #f2f5f6 0%,#e3eaed 37%,#c8d7dc 100%);
  height: 100vh;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
