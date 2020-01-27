<template>
  <b-container id="app" class="mw-100">
    <Titlebar />
    <Navbar @handleLogout="handleLogout" :authenticated="authenticated" :authUser="authUser" />
    <transition name="trans">
      <router-view @handleLogin="handleLogin"></router-view>
    </transition>
  </b-container>
</template>

<script>
import Titlebar from "./components/Titlebar.vue";
import Navbar from "./components/Navbar.vue";
import { APIService } from "./APIService";

const apiService = new APIService();

export default {
  name: "app",
  components: {
    Titlebar,
    Navbar
  },
  data() {
    return {
      authenticated: localStorage.getItem("username") != null,
      authUser: localStorage.getItem("username"),
      userUpvotes: [],
      userFavorites: [],
      userFriends: [],
    };
  },
  methods: {
    getUserData(username) {
      apiService.getUserData(username).then(data => {
        alert(data);
        this.userUpvotes = data["upvoted"];
        this.userFavorites = data["favorited"];
        this.userFriends = data["friends"];
      });
    },
    handleLogin() {
      this.authenticated = true;
      this.authUser = localStorage.getItem("username");
      this.getUserData(this.authUser);
    },
    handleLogout() {
      this.authenticated = false;
      this.authUser = "";
    }
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
.trans-enter-active {
  opacity: 0;
  animation: fadeIn 0.5s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
