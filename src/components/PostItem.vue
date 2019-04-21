<template>
  <b-container class="post-item m-2 w-75 mx-auto">
    <b-row
      class="header"
      @mouseover="hover=true"
      @mouseleave="hover=false"
      :class="{ active: hover }"
    >
      <b-col md="2" class="text-center category">{{ category }}</b-col>
      <b-col md="10" class="text-center title">{{ title }}</b-col>
    </b-row>
    <b-row class="justify-content-center text">
      <p>{{ text }}</p>
    </b-row>
    <b-row class="justify-content-center source">Source: {{ source }}</b-row>
    <b-row class="footer">
      <b-col md="2" class="score">Points: {{ score }}</b-col>
      <b-col md="2" class="fav">Add to fav</b-col>
      <b-col md="6" offset-md="2" class="created">{{ created }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "PostItem",
  components: {},
  props: {
    id: Number,
    title: String,
    category: String,
    text: String,
    source: String,
    score: Number,
    created: String
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {},

  mounted() {}
};
</script>

<style scoped>
.active {
  color: crimson;
}
.post-item {
  border: 2px solid black;
}
.header {
  font-family: "Lato", sans-serif;
  font-size: 1.2em;
  border-bottom: solid 1px black;
}
.category {
  background: darkslategray;
  color: white;
}
.title {
  background: linear-gradient(to bottom, #ffd65e 0%, #febf04 100%);
}
.footer {
  background: beige;
  border-top: solid 1px black;
  font-size: 0.8em;
}
</style>