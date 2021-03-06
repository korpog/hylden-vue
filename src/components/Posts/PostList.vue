<template>
  <b-container>
    <h1 class="mb-1 pb-1">Posts</h1>
    <div class="mt-3 w-75 mx-auto">
      <p><b>Sort by</b></p>
      <b-form-select v-model="selected" :options="options" class="m-1" @change="getSortedPosts()"></b-form-select>
    </div>
    <hr />
    <b-button
      size="lg"
      class="btn mr-3 my-1"
      :class="{ active: previousUrl }"
      @click="prevPage()"
      :disabled="!previousUrl"
    >
      <font-awesome-icon icon="angle-left" />Previous
    </b-button>
    <b-button
      size="lg"
      class="btn ml-3 my-1"
      :class="{ active: nextUrl }"
      @click="nextPage()"
      :disabled="!nextUrl"
    >
      Next
      <font-awesome-icon icon="angle-right" />
    </b-button>

    <div v-for="post in posts" v-bind:key="post.id">
      <PostItem
        :id="post.id"
        :title="post.title"
        :slug="post.slug"
        :category="post.category"
        :text="post.text"
        :source="post.source"
        :score="post.score"
        :created="post.created"
      ></PostItem>
    </div>
  </b-container>
</template>

<script>
import { APIService } from "../../APIService";
import PostItem from "./PostItem.vue";

const apiService = new APIService();

export default {
  name: "PostList",

  components: {
    PostItem
  },

  data() {
    return {
      previousUrl: "",
      nextUrl: "",
      selected: null,
      options: [
        { value: "ta", text: "Title ascending" },
        { value: "td", text: "Title descending" },
        { value: "ca", text: "Date created ascending" },
        { value: "cd", text: "Date created descending" }
      ],
      posts: []
    };
  },

  methods: {
    getPosts(query) {
      apiService.getPosts(query).then(data => {
        this.previousUrl = data.previous;
        this.nextUrl = data.next;
        this.posts = data.results;
      });
    },
    getSortedPosts() {
      let query = "";
      switch (this.selected) {
        case "ta":
          query = "?ordering=title";
          break;
        case "td":
          query = "?ordering=-title";
          break;
        case "ca":
          query = "?ordering=created";
          break;
        case "cd":
          query = "?ordering=-created";
          break;
        default:
          query = "";
      }
      this.getPosts(query);
    },
    prevPage() {
      apiService.getPostsByUrl(this.previousUrl).then(data => {
        this.previousUrl = data.previous;
        this.nextUrl = data.next;
        this.posts = data.results;
      });
    },
    nextPage() {
      apiService.getPostsByUrl(this.nextUrl).then(data => {
        this.previousUrl = data.previous;
        this.nextUrl = data.next;
        this.posts = data.results;
      });
    }
  },

  watch: {
    $route() {
      this.getPosts(this.$route.params.category);
    }
  },

  mounted() {
    this.getPosts(this.$route.params.category);
  }
};
</script>

<style scoped>
h1 {
  font-family: "Lato", sans-serif;
  font-weight: 800;
  border-bottom: solid 3px black;
  width: 50%;
  margin: 0 auto;
}
.active {
  background: darkslategray !important;
}
</style>