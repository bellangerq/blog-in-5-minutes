<template>
  <div>
    <Header></Header>

    <section class="body-container">
      <main class="wrapper">
        <img
          :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
          size="100vw"
          :alt="post.fields.heroImage.fields.description"
        >
        <div class="headline">
          <time class="tiny">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
          <h1>{{ post.fields.title }}</h1>
        </div>
        <article class="copy">
          <vue-markdown>{{post.fields.body}}</vue-markdown>
        </article>
      </main>
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
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    Header,
    VueMarkdown
  }
}
</script>

<style lang="scss">

.headline {
  padding: 3em 0 0;

  h1 {
    font-size: 3.5em;
  }
}

article {
  padding-bottom: 7em;

  h3 {
    font-size: 1.35em;
  }

  ul {
    margin: 0;
    padding-left: 1em;
    list-style: disc;

    li {
      margin: 0;
    }
  }

  *:not(div) {
    margin: 2em 0 1em;
  }
}
</style>
