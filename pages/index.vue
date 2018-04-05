<template>
  <div>
    <Header></Header>
    <section>
      <ul>
        <li v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Header from '~/components/header.vue'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({env, params}) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    })
    .then(posts => {
      return {
        posts: posts.items
      }
    })
    .catch(console.error)
  },
  components: {
    Header,
    ArticlePreview
  }
}
</script>

<style lang="scss">
</style>
