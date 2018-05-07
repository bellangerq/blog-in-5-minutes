<template lang="html">
  <article>
    <img
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
      size="100vw"
      :alt="post.fields.heroImage.fields.description"
      class="cover"
    >
    <div class="content">
      <h1>{{ post.fields.title }}</h1>
      <time v-if="post.fields.publishDate">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
      <hr>
      <vue-markdown>{{ post.fields.body }}</vue-markdown>
      <hr v-if="post.fields.publishDate">
      <ShareButtons :title="post.fields.title" :url="post.fields.slug" v-if="post.fields.publishDate"></ShareButtons>
    </div>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import ShareButtons from '~/components/share-buttons.vue'

export default {
  props: ['post'],
  components: {
    VueMarkdown,
    ShareButtons
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

.cover {
  border-radius: $radius $radius 0 0;
}

.content {
  background: $color-white;
  border-radius: 0 0 $radius $radius;
  padding: 20px;

  time {
    color: $color-main-darker;
    display: block;
    font-size: 0.8em;
    margin: 0 0 20px 0;
    text-align: center;
  }

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
