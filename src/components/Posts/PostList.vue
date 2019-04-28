<template>
  <b-container>
    <h1 class="mb-1 pb-1">Posts</h1>
    <b-button size="lg" class="btn mr-3 my-1" v-bind:class="{ active: previousUrl }" @click="prevPage()">
      <font-awesome-icon icon="angle-left"/>Previous
    </b-button>
    <b-button size="lg" class="btn ml-3 my-1" v-bind:class="{ active: nextUrl }" @click="nextPage()">
      Next
      <font-awesome-icon icon="angle-right"/>
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