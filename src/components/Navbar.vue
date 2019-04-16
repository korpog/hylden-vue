<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-0">Hylden</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

          <router-link to="/">
            <b-nav-item to="/">Home</b-nav-item>
          </router-link>

          <router-link to="/posts">
            <b-nav-item to="posts">All posts</b-nav-item>
          </router-link>

        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown>
            <template slot="button-content">
              Categories
            </template>
            <b-dropdown-item href="#">Biology</b-dropdown-item>
            <b-dropdown-item href="#">History</b-dropdown-item>
            <b-dropdown-item href="#">Astronomy</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 btn" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item v-if="loggedIn">
            <b-button size="sm" class="btn" to="signup">Sign Up</b-button>
          </b-nav-item>
          <b-nav-item-dropdown right v-else>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign In</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: {
    loggedIn: { type: Boolean, default: true }
  },
  components: {
  }
};
</script>

<style scoped>
h1,
.navbar-brand,
.navbar-nav a {
  font-family: 'Lato', sans-serif;
}
.btn {
  background: darkslategray
}
</style>
