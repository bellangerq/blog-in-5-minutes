<template>
  <div>
    <Header></Header>
    <section>
      <div class="cards">
        <div class="card" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </div>
        <div class="card">
          <twitter-card></twitter-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Header from '~/components/header.vue'
import ArticlePreview from '~/components/article-preview.vue'
import TwitterCard from '~/components/twitter-card.vue'

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
    ArticlePreview,
    TwitterCard
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

    @media(min-width: 500px) {
      display: flex;
      margin: 0 20px 40px 20px;
      width: calc((100% / 2) - 40px);
    }

    @media(min-width: 768px) {
      display: flex;
      margin: 0 20px 40px 20px;
      width: calc((100% / 3) - 40px);
    }
  }
}
</style>
