<template>
  <b-container>
    <b-row class="my-3 text-center">
      <b-col>
        <h2>Hello, username!</h2>
        <hr>
        <div>
          <b-form class="w-75 mx-auto pb-2" @submit="resetPassword">
            <b-form-group id="input-reset" label="Email" label-for="input-reset">
              <b-form-input id="input-1" v-model="email" required placeholder="Your email"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Reset password</b-button>
          </b-form>
        </div>

        <hr>
        <h3>Subscriptions</h3>
        <div>
          <b-form class="w-75 mx-auto pb-2" @submit="saveSubs">
            <b-form-group
              id="input-subs"
              label="Receive weekly email with new posts from these categories:"
              label-for="input-subs"
            >
              <b-form-select
                v-model="selectedCategories"
                :options="categories"
                multiple
                :select-size="4"
              ></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Save changes</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { APIService } from "../../APIService";

const apiService = new APIService();
export default {
  name: "UserPage",
  components: {},
  props: {
    authenticated: { type: Boolean, default: false },
    authUser: { type: String, default: "" }
  },
  data() {
    return {
      email: "",
      categories: [],
      selectedCategories: [],
      userData: {}
    };
  },
  methods: {
    resetPassword() {
      apiService.resetPassword("da");
    },
    getCategories() {
      apiService.getCategories().then(data => {
        this.categories = data.results.map(x => x.name);
      });
    },
    saveSubs() {
      apiService.saveSubs("lizergus", this.selectedCategories);
    }
  },
  mounted() {
    this.getCategories();
  }
};
</script>

<style scoped>
</style>
