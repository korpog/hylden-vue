<template>
  <b-container id="app" class="mw-100">
    <Titlebar/>
    <Navbar/>
    <transition name="trans">
      <router-view></router-view>
    </transition>
  </b-container>
</template>

<script>
import Titlebar from "./components/Titlebar.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Titlebar,
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Lato");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  background: rgb(199, 220, 226, 0.4);
}
html,
body {
  background: rgb(199, 220, 226, 0.4);
}
.trans-enter-active{
  opacity: 0;
  animation: fadeIn 0.3s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0.0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
</style>
