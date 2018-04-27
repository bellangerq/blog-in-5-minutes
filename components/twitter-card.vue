<template>
  <div class="twitter-card">
    <p>Enjoying these stories? Get to know when new stories are released by following the Twitter account.</p>
    <Button
      href="https://twitter.com/bellanger_q"
      title="Follow on Twitter"
      text="Follow on Twitter"
      target="_blank"
    ></Button>
  </div>
</template>

<script type="text/javascript">
  import Button from '~/components/button.vue'

  export default {
    components: {
      Button
    }
  }
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';
.twitter-card {
  align-items: center;
  background: $color-white;
  border-radius: $radius;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;

  img {
    border-radius: $radius $radius 0 0;
  }

  a {
    background: $color-main;
    border-radius: $radius;
    color: $color-white;
    display: block;
    margin: 20px auto 0;
    padding: 5px 10px;
    text-align: center;
    width: 100%;
  }

}
</style>
