<template>
  <b-container>
    <h1>Posts</h1>

    <div v-for="post in posts" v-bind:key="post.id">
      <PostItem :title="post.title" :category="post.category" :text="post.text" 
      :sources="post.sources" :score="post.score" :created="post.created"></PostItem>
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