<template>
  <div class="signup w-75 p-2 mx-auto">
    <h1 class="mb-2 pb-2">Create Post</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Category:" label-for="input-1">
      <b-form-select v-model="form.category" :options="categories"></b-form-select>
      </b-form-group>

    <b-form-group id="input-group-2" label="Title:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.title" required placeholder="Edit title"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Text" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="form.text"
          required
          placeholder="Edit text"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-4" label="Source" label-for="input-4">
        <b-form-input id="input-4" v-model="form.source" required placeholder="Edit source"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { APIService } from "../../APIService";
const apiService = new APIService();

export default {
  name: "PostCreate",
  data() {
    return {
      categories: [],
      form: {
        category: "",
        title: "",
        text: "",
        source: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      apiService.createPost(this.form);
    },
    getCategories() {
      apiService.getCategories().then(data => {
        this.categories = data.results.map(x => x.name);
      });
    }
  },
  mounted() {
    this.getCategories();
  }
};
</script>

<style scoped>
h1 {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  border-bottom: solid 2px black;
  width: 50%;
  margin: 0 auto;
}
</style>