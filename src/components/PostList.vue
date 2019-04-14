<template>
  <div>
    <h1>Posts</h1>

    <div v-for="post in posts" v-bind:key="post.id">
      <post :title="post.title" :category="post.category" :text="post.text" 
      :sources="post.sources" :score="post.score" :created="post.created"></post>
    </div>
  </div>
</template>

<script>
import { APIService } from "../APIService";
import Post from "./Post.vue";

const apiService = new APIService();

export default {
  name: "PostList",

  components: {
    Post
  },

  data() {
    return {
      posts: []
    };
  },

  methods: {
    getPosts() {
      apiService.getPosts().then(data => {
        this.posts = data.results;
      });
    }
  },

  mounted() {
    this.getPosts();
  }
};
</script>