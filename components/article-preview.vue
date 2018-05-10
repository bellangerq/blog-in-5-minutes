<template>
  <nuxt-link class="article-link" :to="{ name: 'slug', params: { slug: post.fields.slug }}">
    <img
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=400&h=200'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=400&h=200&fit=fill 400w, ${post.fields.heroImage.fields.file.url}?w=1000&h=500&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1000&fit=fill 2000w`"
      :alt="post.fields.title"
    >
    <div class="content">
      <h2>{{ post.fields.title }}</h2>
      <p>{{ post.fields.description }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

.article-link {
  transition: box-shadow .3s ease;
  background: $color-white;
  border-radius: $radius;
  box-shadow: 0 2px 2px 0 rgba($color-black, 0.14);
  height: 100%;

  img {
    border-radius: $radius $radius 0 0;
    filter: grayscale(100%);
    transition: filter .5s ease;
  }

  .content {
    background: $color-white;
    border-radius: 0 0 $radius $radius;
    padding: 20px;

    h2 {
      font-size: 1.25em;
      font-weight: 600;
      margin: 0 0 10px 0;
    }

    p {
      font-family: $font-serif;
    }
  }

  &:hover img,
  &:focus img {
    filter: grayscale(0%);
  }
}
</style>
