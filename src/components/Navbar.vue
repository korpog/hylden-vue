<template>
  <div class="justify-content-center">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="w-80">
      <b-navbar-brand tag="h1" class="mb-0">Hylden</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>

          <b-nav-item :to="{ name: 'posts', params: { category: 'all' }}">Posts</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown>
            <template slot="button-content">Categories</template>
            <b-dropdown-item :to="{ name: 'posts', params: { category: 'biology' }}">Biology</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'posts', params: { category: 'history' }}">History</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'posts', params: { category: 'astronomy' }}">Astronomy</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/post-create">Create post</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search posts by title"
              v-model="searchQuery"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 btn" @click="searchPosts()">Search</b-button>
          </b-nav-form>

          <b-nav-item v-if="!authenticated">
            <b-button size="sm" class="btn mr-2" to="/signup">Sign Up</b-button>
            <b-button size="sm" class="btn" to="/login">Log In</b-button>
          </b-nav-item>
          <div class="mx-3" v-else>
            <b-img
              left
              width="32px"
              height="32px"
              v-bind:src=getAvatarPath()
              onerror="this.onerror=null;this.src='http://127.0.0.1:8000/media/avatar/placeholder.png';"
              alt="avatar"
              class="mr-1"
            ></b-img>
            <b-nav-item-dropdown class="ml-3" right>
              <template slot="button-content">
                <b id="username">{{authUser}}</b>
              </template>
              <b-dropdown-item :to="{ name: 'user', params: { username: authUser}}">Profile</b-dropdown-item>
              <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { APIService } from "../APIService";

const apiService = new APIService();

export default {
  name: "Navbar",
  components: {},
  props: {
    authenticated: { type: Boolean, default: false },
    authUser: { type: String, default: "" }
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    searchPosts() {
      const query = `?title__contains=${this.searchQuery}`;
      this.$router.push({ name: "posts", params: { category: query } });
    },
    logout() {
      apiService.logout().then(() => {
        this.$emit("handleLogout");
        this.$router.push("/");
      });
    },
    getAvatarPath() {
      let username = this.authUser;
      let path = `http://127.0.0.1:8000/media/avatar/${username}/${username}.jpg`;
      return path;
    }
  }
};
</script>

<style scoped>
h1,
.navbar-brand,
.navbar-nav a {
  font-family: "Lato", sans-serif;
}
.btn {
  background: darkslategray;
}
#username {
  color: gold;
}
</style>
