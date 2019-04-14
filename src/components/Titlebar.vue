<template>
  <b-container class="title">
    <div class="row justify-content-center">
      <img src="../assets/hylden.png" alt="Hylden logo">
    </div>
    <div class="row justify-content-center py-1" id="about">Explore fascinating facts about life, people and the universe </div>
  </b-container>
</template>


<script>
export default {
  name: "Titlebar"
};
</script>

<style scoped>
#about {
    background: linear-gradient(to bottom, #b0d4e3 0%,#88bacf 100%);
    border-radius: 3px;
}
</style>