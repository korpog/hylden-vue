<template>
  <b-container>
    <PostItem
      :id="itemData.id"
      :title="itemData.title"
      :slug="itemData.slug"
      :category="itemData.category"
      :text="itemData.text"
      :source="itemData.source"
      :score="itemData.score"
      :created="itemData.created"
    ></PostItem>
  </b-container>
</template>

<script>
import { APIService } from "../../APIService";
import PostItem from "./PostItem.vue";

const apiService = new APIService();

export default {
  name: "PostDetail",
  components: {
    PostItem
  },

  data() {
    return {
        itemData: [],
    };
  },

  methods: {
    getPostBySlug(slug) {
      apiService
        .getPostBySlug(slug)
        .then(data => {
          this.itemData = data;
        })
        .catch(error => console.log(error));
    }
  },

  watch: {
    $route() {
      this.getPostBySlug(this.$route.params.slug);
    }
  },

  mounted() {
    this.getPostBySlug(this.$route.params.slug);
  }
};
</script>

<style scoped>
</style>