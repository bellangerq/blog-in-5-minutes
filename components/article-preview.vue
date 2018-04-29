<template>
  <nuxt-link class="article-link" :to="{ name: 'slug', params: { slug: post.fields.slug }}">
    <img
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw"
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
  height: 100%;

  img {
    border-radius: $radius $radius 0 0;
    filter: grayscale(100%);
    transition: all .5s ease;
  }

  .content {
    background: $color-white;
    border-radius: 0 0 $radius $radius;
    padding: 20px;

    h2 {
      font-size: 1.25em;
      font-weight: normal;
      margin: 0 0 10px 0;
    }

    p {
      font-size: 0.875em;
    }
  }

  &:hover, &:focus {
    box-shadow: 0px 2px 2px 0px rgba($color-black, 0.14);

    article img {
      filter: grayscale(0%);
    }
  }
}
</style>
