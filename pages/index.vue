<template>
  <div>
    <section>
      <div class="cards">
        <div class="card" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({env, params}) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(posts => {
      return {
        posts: posts.items
      }
    }).catch(console.error)
  },
  components: {
    ArticlePreview
  }
}
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;

  .card {
    display: block;
    margin: 0 20px 20px;
    min-height: 350px;

    @media(min-width: 500px) {
      display: flex;
      margin: 0 20px 40px 20px;
      width: calc((100% / 2) - 40px);
    }
  }
}
</style>
