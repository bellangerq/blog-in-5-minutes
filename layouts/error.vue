<template>
  <div class="container">
    <section>
      <article>
        <img class="cover" src="~/static/error-banner.png" alt="Error">
        <div class="content">
          <h1 v-if="error.statusCode === 404">Page not found</h1>
          <h1 v-else>An error occurred</h1>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget justo sed enim faucibus rhoncus. In arcu lacus, consectetur sit amet ultrices sed, ullamcorper tincidunt augue. In tincidunt urna sit amet dolor malesuada euismod.</p>
          <br>
          <nuxt-link to="/">Back to the home page</nuxt-link>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

article {
  background: $color-white;
  border-radius: $radius;
  box-shadow: 0 2px 2px 0 rgba($color-black, 0.14);
  margin: 0 20px 20px;
}

.cover {
  border-radius: $radius $radius 0 0;
}

.content {
  background: $color-white;
  border-radius: 0 0 $radius $radius;
  padding: 20px;

  a {
    text-decoration: underline;

    &:hover,
    &:focus {
      color: $color-main-darker;
      text-decoration: none;
    }
  }
}
</style>
