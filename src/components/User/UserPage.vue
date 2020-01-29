<template>
  <b-container>
    <b-row class="my-3 text-center">
      <b-col>
        <h2>Hello, {{username}}!</h2>
        <hr />
        <div>
          <b-form-group
            class="w-75 mx-auto pb-2"
            id="avatar-upload"
            label="Upload avatar image: "
            label-for="avatar-upload"
          >
            <b-form-file
              accept="image/*"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              v-model="avatar"
            ></b-form-file>
            <b-button class="my-2" variant="primary" @click="uploadImg()">Upload</b-button>
          </b-form-group>
        </div>
        <hr />

        <hr />
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
            <b-button type="submit" variant="primary">Subscribe</b-button>
            <b-button class="btn btn-danger ml-2" @click="removeSubs()">Unsubscribe</b-button>
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
    username: { type: String, default: "" }
  },
  data() {
    return {
      email: "",
      avatar: null,
      categories: [],
      usersList: [],
      selectedCategories: [],
    };
  },
  methods: {
    resetPassword() {
      apiService.resetPassword(this.email);
    },
    getCategories() {
      apiService.getCategories()
      .then(data => {
        this.categories = data.results.map(x => x.name);
      });
    },
    getAllUsers() {
      apiService.getAllUsers()
      .then(data => {
        this.usersList = data.results.map(x => x.user);
      });
    },
    saveSubs(evt) {
      evt.preventDefault();
      apiService
        .saveSubs(this.selectedCategories)
        .then(response => {
          if (response.status == 200) {
            alert(
              "You are now subscribed to following categories: " +
                response.data.subscriptions
            );
          }
        })
        .catch(error => alert(error));
    },
    removeSubs() {
      apiService
        .removeSubs(this.selectedCategories)
        .then(response => {
          if (response.status == 200) {
            alert(
              "You are no longer subscribed to following categories: " +
                this.selectedCategories
            );
          }
        })
        .catch(error => alert(error));
    },
    uploadImg() {
      let formData = new FormData();
      formData.append("avatar", this.avatar);
      apiService
        .uploadAvatar(formData)
        .then(response => {
          if (response.status == 201) {
            alert("Avatar successfully uploaded!");
            location.reload();
          }
        })
        .catch(error => alert(error));
    }
  },
  mounted() {
    this.getCategories();
    this.getAllUsers();
  }
};
</script>

<style scoped>
</style>
