<template lang="html">
  <a class="btn" :href="href" :title="title" :target="target">{{ text }}</a>
</template>

<script>
export default {
  props: [
    'href',
    'target',
    'text',
    'title'
  ]
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';
.btn {
  background: $color-main;
  border-radius: $radius;
  color: $color-white;
  display: block;
  margin: 20px auto 0;
  padding: 5px 10px;
  text-align: center;
  width: 100%;

  &:hover, &:focus {
    background: darken($color-main, 5%);
    box-shadow: 0px 2px 2px 0px rgba($color-black, 0.14);
  }
}
</style>
