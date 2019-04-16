<template>
  <b-container class="my-2">
    <b-row class="justify-content-center mb-3">
      <h1 class="mb-1 pb-1">Welcome</h1>
    </b-row>
    <b-row class="justify-content-center my-3">
      <b-col sm="6"><img src="../static/mantis.jpg" class="img-fluid item-img mb-2"></b-col>
      <b-col sm="6" class="my-auto"><h5>Did you know that a male mantis can 
        impregnate his female partner even with his head bitten off?</h5></b-col>
    </b-row>
    <b-row class="justify-content-center my-3">
      <b-col sm="6" class="my-auto"><h5>Have you heard of Stanislav Petrov? He single-handedly averted a nuclear crisis
        during the height of the Cold War in 1983.</h5></b-col>
      <b-col sm="6"><img src="../static/icbm.jpg" class="img-fluid item-img"></b-col>
    </b-row>
    <b-row class="justify-content-center my-3 pt-3 bottom-text">
      <h4>Many more facts like these wait for you to be discovered - here in the Hylden!</h4>
    </b-row>
  </b-container>
</template>

<script>
</script>

<style scoped>
h1 {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  border-bottom: solid 2px black;
  width: 50%;
  margin: 0 auto;
}
h4, h5 {
    font-family: "Lato", sans-serif;
}
.bottom-text {
  border-top: solid 1px black;
  
}
.item-img {
  transition: 0.3s;
}
.item-img:hover {
  transform: scale(1.05);
}
</style>