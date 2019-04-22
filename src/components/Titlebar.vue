<template>
  <b-container class="title mw-100">
    <div class="row justify-content-center">
      <img src="../static/hylden.png" alt="Hylden logo">
    </div>
    <div
      class="row justify-content-center py-1"
      id="about"
    >Explore fascinating facts about life, people and the universe</div>
  </b-container>
</template>


<script>
export default {
  name: "Titlebar"
};
</script>

<style scoped>
#about {
  background: linear-gradient(to bottom, #b0d4e3 0%, #88bacf 100%);
}
.title {
  background: linear-gradient(to bottom, #f2f5f6 0%, #e3eaed 37%, #c8d7dc 100%);
  border-radius: 3px;
}
</style>