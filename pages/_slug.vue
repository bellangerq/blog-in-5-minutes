<template>
  <div>
    <Header :title="title" :links="links"></Header>
    <section>
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
          <time>{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
          <vue-markdown>{{ post.fields.body }}</vue-markdown>
        </div>
      </article>
    </section>

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { createClient } from '~/plugins/contentful.js'
import Header from '~/components/header.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_TITLE_ID
      }),
      client.getEntries({
        'content_type': env.CTF_NAVIGATION_ID,
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug
      })
    ]).then(([title, links, post]) => {
      return {
        title: title.items[0],
        links: links.items,
        post: post.items[0]
      }
    }).catch(console.error)
  },
  components: {
    Header,
    VueMarkdown
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

article {
  background: $color-white;
  border-radius: $radius;
  margin: 0 20px 20px;
  max-width: 1040px;

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
}
</style>
