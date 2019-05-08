<template>
  <div class="signup w-75 p-2 mx-auto">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Title:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.title" required placeholder="Edit title"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Text" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.text"
          required
          placeholder="Edit text"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-3" label="Source" label-for="input-3">
        <b-form-input id="input-3" v-model="form.source" required placeholder="Edit source"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Save changes</b-button>
    </b-form>
  </div>
</template>

<script>
import { APIService } from "../../APIService";
const apiService = new APIService();

export default {
  name: "PostEditForm",
  data() {
    return {
      form: {
        title: "",
        text: "",
        source: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      apiService
        .updatePost(this.form)
        .then(result => {
          if (result.status === 200) {
            alert("Successfully updated!");
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>