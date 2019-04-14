<template>
  <div class="container post-item">
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
  name: "PostItem",
  components: {},
  props: {
    title: String,
    category: String,
    text: String,
    sources: String,
    score: Number,
    created: String
  },
  methods: {},

  mounted() {}
};
</script>