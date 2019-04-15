<template>
  <div class="signup p-2">
    <h1 class="mb-2 pb-2">Sign Up</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.username" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email address:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { APIService } from "../../APIService";
const apiService = new APIService();

export default {
  name: "SignUp",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
      apiService.postUser(JSON.stringify(this.form));
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  border-bottom: solid 2px black;
  width: 50%;
  margin: 0 auto;
}
</style>