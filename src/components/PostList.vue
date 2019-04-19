<template>
  <b-container>
    <h1 class="mb-1 pb-1">Posts</h1>

    <div v-for="post in posts" v-bind:key="post.id">
      <PostItem :id="post.id" :title="post.title" :category="post.category" :text="post.text" 
      :source="post.source" :score="post.score" :created="post.created"></PostItem>
    </div>
  </b-container>
</template>

<script>
import { APIService } from "../APIService";
import PostItem from "./PostItem.vue";

const apiService = new APIService();

export default {
  name: "PostList",

  components: {
    PostItem
  },

  data() {
    return {
      posts: [],
      query: '',
    };
  },

  methods: {
    getPosts(query) {
      apiService.getPosts(query).then(data => {
        this.posts = data.results;
      });
    }
  },

  mounted() {
    if (typeof this.$route.params.category == "undefined") {
      this.query = "";
    } else {
    this.query = this.$route.params.category;
    }
    this.getPosts(this.query);
  }
};
</script>

<style scoped>
h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  border-bottom: solid 3px black;
  width: 50%;
  margin: 0 auto;
}
</style>