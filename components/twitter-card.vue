<template>
  <div class="twitter-card">
    <h2>Enjoying these stories?</h2>
    <!-- create button component -->
    <a href="#">Follow on twitter</a>
  </div>
</template>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';
.twitter-card {
  background: $color-white;
  border-radius: $radius;
  transition: box-shadow .3s ease;
  width: 100%;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
