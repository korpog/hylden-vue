<template>
  <div class="container">
      {{ title }}
      {{ category }}
      {{ score }}
      {{ text }}
      {{ sources }}
      {{ created }}
  </div>
</template>

<script>

export default {
  name: "Post",
  components: {},
  props: ["title", "category", "text", "sources", "score", "created"],
  methods: {},

  mounted() {
    this.getPosts();
  }
};
</script>